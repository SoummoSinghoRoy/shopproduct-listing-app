* Task - Signup kore profile/user create er por login validation + login funcationality niye kaj korte hobe sathe validation e error thakle flash e seta dekhate hobe but eta flash niye kaj korar somoy.
* Task - Viewshop template e product category ta niye kaj korbo jkhn product add kora niye kaj hobe.
* Task - shop edit + profile edit er option rakhte hobe sidebar e.
* Task - Need to do work user delete functionality.
* Task - jokhon ekta product delete korbe tokhon delete er por je category theke product delete korlo sei category'r all product page e redirect korbe. r jkhn kono product thakbey na tkhn add-product page e nibe.
* Task - Need to do create 404 & 500 page.


### Project Requirements 
1. navigation(before creation shop owner profile) - all products(for general user), sign up, log in & not include search, also invisible product delete + edit button
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
12. all products page jeta general user er hobe tar product er sathe shop profile link kora thakbe.

### Unsuccessfull Task
1. multer configuration korechi kintu error dekhachhe na signup template e tobe multer nije teheke ekta error dekhacche. ja ekhono solve korte parini.

### Completed tasks -
1. signup & login template done,
2. signup backend validation done(but face a problem when occured a error error message don't show in template but multer throw their premade error message)
3. login backend validation done.
4. Login funcationality done, session + authentication work done.
5. When user sign up first users session create also user will get create a shop page.
6. Backend & frontend validation complete for create shop page.
7. viewShop template design done with mix profile info, functionality done, edit shop template & functionality done.
8. Food category product add template design, functionality, validation done.
9. Food category product delete functionality done.
9. Shop delete functionality done.

#### What i learned to do this project - 

1. When worked with authentication we have to do work with session first then authentication, because when we work with session we must keep user activity record so authentication work with based on user data & session.
2. We can add own nesseccary property with request as a request object property like: req.user. We must bind loggedIn user because when a user send request the server verify this user data is exist & all request will perfom based on this user. Otherwise server will not understand that which user send request in server & what response server will back.
3. If need to available nesseccary credentials for views all template of the application we can use res.locals. res.locals make available nesseccary credentials for views all template.   
4. If we need to store multiple data for one credentials (such as - address) & have multiple input fields for get data then our model schema will be array of object, but we have no multiple field but need to store multiple data then our model schema type will be array/object.
5. when we work with multiple uploaded file we use req.files for getting uploaded data but work with singular we use req.file.
6. amra jokhon array theke ber kore kono data store korbo tokhon general varibale e rakha jabe na. kono array ba object e assign korbo.
7. jokhon ekta model ke ar ekta model er referance hisebe use korbo ebong ekti model er opor refer kora model dependable hobe tokhon je model er opor depend korbe tar kaj korar somoy referance model schema ke update korte hobe.
8. jokhon ekta model ke ar ekta model er referance hisebe use korbo ebong ekti model er opor refer kora model dependable hobe tokhon je model er opor depend korbe tar kaj korar somoy referance model schema ke update korar somoy jodi reference model er schema ke array of object e assign kora hoi tahole obossyoi db te add korar somoy array'r push method r remove korar joyo pull method use hobe.
9. jokhon db model ke notun data diye update kora hobe tokhon update er somoy bole dite hobe je sob kichu new ja. new ekta property value hobe true. (eti mongoose er khetre).
10. amra jokhon form e enctype = multipart/formdata use korbo tokhon route er sathe must middleware use hobe na hole data req body theke paoya jabe na. tai file baad e form e kaj korle enctype na define kora vlo r jodi kori tahole file handle korar je middleware ache tar documentation follow kore file baad e kaj korar je instruction dibe seti follow korbo.
11. jkhn kono data delete korar por onyo kothao response redicrect korbo tokhon delete routing hobe get method e but kono redirection hobe na just data ta remove hobe tokhon delete method use korbo.
