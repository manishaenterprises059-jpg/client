# TODO - Premium Fashion Redesign (MERN/React)

## Phase 0 - Foundation
- [x] Update theme palette + add `.dark` overrides in `src/index.css`
- [x] Apply theme initialization in `src/App.jsx`
- [x] Add theme toggle in `src/component/header.jsx`
- [x] Update footer to use theme vars in `src/component/footer.jsx`

## Phase 1 - Reusable Components (premium)
- [x] Create `src/components/ui/Button.jsx`
- [x] Create `src/components/ui/Card.jsx`
- [x] Create `src/components/ui/Input.jsx`
- [x] Create `src/components/ui/Modal.jsx`
- [x] Create `src/components/products/ProductCard.jsx`
- [x] Create `src/components/categories/CategoryCard.jsx`
- [x] Create `src/components/search/SearchBar.jsx`


## Phase 2 - Product UI migration
- [ ] Replace `src/component/product.jsx` with new `ProductCard` usage
- [ ] Replace `src/component/proudct_list.jsx` product grid to use new card + skeletons

## Phase 3 - Homepage redesign
- [ ] Redesign `src/pages/home.jsx` to include: Hero, AI Search, Categories, Trending, New, Best, Flash Sale, Reviews, Newsletter, Modern Footer

## Phase 4 - Product details redesign
- [ ] Redesign `src/pages/product_detials_page.jsx` with gallery/zoom, size+color, related products, reviews

## Phase 5 - Cart/Checkout redesign
- [ ] Redesign `src/component/user_cart.jsx` (premium cart + quantity controls + coupon)
- [ ] Add multi-step checkout page and integrate payment UI

## Phase 6 - Global sweep
- [ ] Replace remaining gray/pink/blue Tailwind classes across pages/components with theme vars
- [ ] Add Framer Motion page transitions + section fade-ins everywhere
- [ ] Lazy loading for images + performance pass


