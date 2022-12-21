* Task - Need to do create 404 & 500 page.
* Task - view shop e edit password button er kaj baki. eta jkhon password change functionality niye kaj korbo tokhon korte hobe. shop create hoye gele jokhon view shop page e nibe tokhon flas dite hobe 'you are now eligable to add products'. 

### Completed tasks -
1. signup & login template done,
2. signup backend validation done(but face a problem when occured a error error message don't show in template but multer throw their premade error message)
3. login backend validation done.
4. Login funcationality done, session + authentication work done.
5. When user sign up first users session create also user will get create a shop page.
6. Backend & frontend validation complete for create shop page.
7. viewShop template design done with mix profile info, functionality done, edit shop template & functionality done.
8. Food category product add template design, functionality, validation done.
9. Food category product delete functionality done. when a shop owner delete single by single all product owner back respond to add a product page. it's functionality done.
10. Shop delete functionality done.
11. User delete functionality done.
12. food category all products template/page done.
13. Beauty category product add template design, functionality, validation done.
14. Beauty category product delete functionality done. when a shop owner delete single by single all product. owner back respond to add a product page. it's functionality done.
15. Beauty category all products template/page done.
16. Medicine category product add template design, functionality, validation done.
17. Medicine category product delete functionality done. when a shop owner delete single by single all product. owner back respond to add a product page. it's functionality done.
18. Medicine category all products template/page done.
19. All products page for shop owner functionality, template design done.
20. model fields/ schema indexing & weights sets done. product item name search query functionality done.
21. All products + single product get api done.
22. now general visitor can show all products.

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
11. jkhn kono data delete korar por onyo kothao response redirect korbo tokhon delete routing hobe get method e but kono redirection hobe na just data ta remove hobe tokhon delete method use korbo jemon - data table theke data delete kora.
12. jkhn database er kono data ke ekotrito kore ekta data array ba object e rakhle specially array te tokhon db theke data ber kore ene spread kore dite pari spread operator er madhyome. er fole sadharon obstai db theke data ber korar somoy array hisebe data dei seta tokhon spread hoye jai. (mongoose er jonyo projojyo)
13. jkhn db model theke data ber kora hobe kintu seti limited mane sob drkr nai kichu drkr. tkhn model er sathe limit() method use korbo. eti pagination er khetre help kore. (mongoose er jonyo projojyo)
14. kono application er search functionality kaj korte chaile alada ekta controller & route niye kaj korbo search er jonyo. karon search field ta ekta form handle kore r form thakle action thakbe. r action thakle route lagbe r route thakle tar controller dorkar. ebong obosyoi serach er jonyo je keayword gulo ta ke model er vitor indexing kore nite hobe. ebong search er request thakbe query hisebe tai search terms ke extract korte hobe req.query theke. search er sathe pagination er ekta bypar thake karon data search korle onek onke data aste pare tai pagination use kora better. ejonyo pagination kaj tao korte hobe. erpor  search er query'r je system ache segulo niye kaj korte hobe. search input filed er name hisebe searchTerm dite hobe. searchTerm muloto req.query er object jar modhye sokol search keyword thakbe.
15. jokhon amdr kache ekadhik sub model thakbe example - product er category. tokhon jodio sokol category product ke ek sathe dekhanor dorkar pore tokhon obosyoi tar jonyo ekta model banabo ja sokol data ekotre pete ba searching, filter er moto query parameter er kaj e subidha dibe. ekhetre model er schema hobe category ba reference model r type hobe array ba object.
16. amra flash/alert deoyar jonyo je connect-flash middleware ta use korchi eta muloto middleware hisebe use hobe. ja paoya jabe request object er flash namok property hisebe ja ekta function. eti 2 ta argument nei 1 key/name - (key/name bolte alert er reason ke bojhai hote pare success. fail, warning), 2nd argument hisebe alert message. ebong eti get & post/ update parallally kaj kore. amar jekhan theke ba je controller theke response pathabe sekhane req.flash() er 2 ta argument dara define korbo opor dike e response pathano hobe jehkane tar jonyo nischoy controller thakbe sekhane flash message ta extract korbo req.flash() use kore e khetre sudhu flash er jonyo je name/key setiy use korte hobe. flash ba alert jehetu request er opor base kore hobe tai ekta utility hisebe flash ke baniye sob jaygai use korte pari.
17. kono array theke single single kore value paoyar jonyo for..of loop method use korte pari. 
18. jokhon pagination er kaj korbo tokhon jehetu backend + db theke kaj hobe tai ekta db model er opor base kore pagination er kaj kora btter
