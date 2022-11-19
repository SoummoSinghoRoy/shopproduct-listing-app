* Task - signup.ejs e template er kaj korte hobe + ekta instruction thakbe je sign up korley se shop create er page pabe.
Multer configure korte hobe.

### Project Requirements 
1. navigation(before creation shop owner profile) - all products(for general user), sign up, log in & not include search
2. navigation(after creation shop owner profile) - all products(for shop owner), log out & include search 
3. sidebar nav(after creation shop owner profile/ authenticated owner profile) - all products(for shop owner), category wise product add + view products (with dropdown), Shops(with dropdown) view shop & edit shop, edit owner profile, log out
4. edit product button will keep internally view single product page. but edit functionality wiil be appeared for authenticated profile. 
5. Keep available all shops products for general user in all products page. since all categories product we can populate from shop db.
6. But shop owner will get only own shop products in all products page.
7. Existing user cannot create more than one shop with one email. While creating the shop, email + password validation should be checked so that none of them match.
8. Need all shops products which can get by a api.