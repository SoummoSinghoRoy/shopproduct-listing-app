* Task - Signup kore profile/user create er por login validation + login funcationality niye kaj korte hobe sathe validation e error thakle flash e seta dekhate hobe but eta flash niye kaj korar somoy.
* Task - need to complete design createShop template.

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
10. if a user didn't have a shop this user can't operate other operation such as product add, edit, delete.
11. all products have 2 different template one for shop owner & other one for general user.

### Unsuccessfull Task
1. multer configuration korechi kintu error dekhachhe na signup template e tobe multer nije teheke ekta error dekhacche. ja ekhono solve korte parini.
2. user er data save korar somoy user jokhon sign up korche tokhon profile pic validation er issue'r jonyo empty hoye jacche fole data save hocche na. ja ekhono solve korte parini.

### Completed tasks -
1. signup & login template done,
2. signup backend validation done(but face a problem when occured a error error message don't show in template but multer throw their premade error message)
3. login backend validation done.
4. Login funcationality done, session + authentication work done.
5. When user sign up first users session create also user will get create a shop page.

#### What i learned to do this project - 

1. When worked with authentication we have to do work with session first then authentication, because when we work with session we must keep user activity record so authentication work with based on user data & session.
2. We can add own nesseccary property with request as a request object property like: req.user. We must bind loggedIn user because when a user send request the server verify this user data is exist & all request will perfom based on this user. Otherwise server will not understand that which user send request in server & what response server will back.
3. If need to available nesseccary credentials for views all template of the application we can use res.locals. res.locals make available nesseccary credentials for views all template.   