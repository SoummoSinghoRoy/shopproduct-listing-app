* Task 1 - Signup kore profile/user create er por login validation + login funcationality niye kaj korte hobe.
* Task 2 - login functionality niye kaj hole authentication + session niye kaj korte hobe.
* Task 3 - need to complete design createShop template.

### Project Requirements 
1. navigation(before creation shop owner profile) - all products(for general user), sign up, log in & not include search
2. navigation(after creation shop owner profile) - all products(for shop owner), log out & include search 
3. sidebar nav(after creation shop owner profile/ authenticated owner profile) - all products(for shop owner), category wise product add + view products (with dropdown), Shops(with dropdown) view shop & edit shop, edit owner profile, log out
4. edit product button will keep internally view single product page. but edit functionality wiil be appeared for authenticated profile. 
5. Keep available all shops products for general user in all products page. since all categories product we can populate from shop db.
6. But shop owner will get only own shop products in all products page.
7. Existing user cannot create more than one shop with one email. While creating the shop, email + password validation should be checked so that none of them match.
8. Need all shops products which can get by a api.
9. all neccessery router will be restricted such as - shop create, signup etc.
10. if a user didn't have a shop this user can't operate other operation such as product add, edit, delete

### Unsuccessfull Task
1. multer configuration korechi kintu error dekhachhe na signup template e tobe multer nije teheke ekta error dekhacche. ja ekhono solve korte parini.
2. user er data save korar somoy user jokhon sign up korche tokhon profile pic validation er issue'r jonyo empty hoye jacche fole data save hocche na. ja ekhono solve korte parini.

### Completed tasks -
1. signup & login template done,
2. signup backedn validation done(but face a problem when occured a error error message don't show in template but multer throw their premade error message)