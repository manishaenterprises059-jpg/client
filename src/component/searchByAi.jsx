import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchByAi, getAllProduct } from "../services/product";
import { searcContext } from "../context/searchcontext";

function SearchByAi({ onClose }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Correctly destructure from context
  const {
    setAiSearchResults,
    setSearchMode,
    setSearch,        // ← This was missing
    resetToNormalMode
  } = useContext(searcContext);

  const { data: productsData, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
    staleTime: 5 * 60 * 1000,
  });

  const allProducts = productsData?.data || productsData || [];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSearch = async () => {
    if (!image) {
      alert("Please select an image first");
      return;
    }

    if (productsLoading || allProducts.length === 0) {
      alert("Products are still loading. Please wait a few seconds and try again.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await searchByAi(formData);
      const queryEmbedding = res?.data?.embedding?.[0];

      if (!queryEmbedding) {
        throw new Error("Invalid response from AI");
      }

      const matchedProducts = allProducts
        .map((product) => ({
          ...product,
          similarity: cosineSimilarity(queryEmbedding, product.embedding || []),
        }))
        .filter((product) => product.similarity > 0.75)
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 20);

      if (matchedProducts.length === 0) {
        alert("No similar products found. Try a different image.");
        return;
      }

      // ✅ Fixed: Now using setSearch from context
      setSearch("");
      setAiSearchResults(matchedProducts);
      setSearchMode(true);

      onClose?.();

    } catch (err) {
      console.error("AI Search Error:", err);
      alert("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setImage(null);
    setPreview(null);
  };

  function cosineSimilarity(vecA, vecB) {
    if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
    let dot = 0, normA = 0, normB = 0;
    for (let i = 0; i < vecA.length; i++) {
      dot += vecA[i] * vecB[i];
      normA += vecA[i] * vecA[i];
      normB += vecB[i] * vecB[i];
    }
    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-surface border border-theme rounded-3xl shadow-theme max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-theme">
        AI Search
      </h2>

      {!preview ? (
        <label
          className="
        w-80 h-80
        border-2 border-dashed border-theme
        bg-surface
        rounded-3xl
        flex flex-col items-center justify-center
        cursor-pointer
        hover:border-[var(--accent)]
        hover:scale-[1.02]
        transition-all duration-300
      "
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <span className="text-6xl mb-4">📸</span>

          <p className="font-semibold text-theme">
            Upload Product Image
          </p>

          <p className="text-sm text-muted mt-2">
            We will find similar items
          </p>
        </label>
      ) : (
        <div className="flex flex-col items-center gap-6">

          <div className="w-72 h-72 rounded-3xl overflow-hidden border border-theme shadow-theme bg-surface">
            {loading ? (
              <div className="h-full flex items-center justify-center">
                <div className="animate-spin h-12 w-12 border-4 border-[var(--accent)] border-t-transparent rounded-full" />
              </div>
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex gap-4 flex-wrap justify-center">

            <button
              onClick={handleSearch}
              disabled={loading || productsLoading}
              className="
            px-8 py-3
            bg-[var(--accent)]
            hover:opacity-90
            disabled:opacity-50
            text-black
            font-semibold
            rounded-xl
            transition-all duration-300
            shadow-md
          "
            >
              {loading ? "Searching..." : "🔍 Find Similar Products"}
            </button>

            <button
              onClick={handleClear}
              disabled={loading}
              className="
            px-8 py-3
            bg-red-500
            hover:bg-red-600
            text-white
            font-semibold
            rounded-xl
            transition-all duration-300
          "
            >
              Clear
            </button>

          </div>

          {productsLoading && (
            <p className="text-sm text-muted">
              Loading products catalog...
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchByAi;