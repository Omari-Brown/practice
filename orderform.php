<!DOCTYPE html>
<html lang="en">
    <head>
        <title>My Order Form</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=devicewidth, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="description" content="Omari's Order Form">
        <meta name="author" content="Omari Brown">
        <link rel="stylesheet" href="orderformstyles.css">
        <script src="orderform.js"></script>
    </head>
    <body>
        <!--<?php include 'header.php'; ?>-->
        <header>
            <h1> Omari's Store </h1>
            <p> ~ Customer Satisfaction is Our Goal ~</p>
            <h3> Welcome!!! </h3>
        </header>
        <main>
            <h2>Order Form</h2>
            <section id="orderform">  
                <p>Select the items you would like to order</p>
                <div class="grid-container">
                    <div id="card1" class="card">
                        <img src="custom-Varsity-Jacket-Zipper-Hood.jpg" alt="">
                        <p>Price: $5,000.00</p>
                        <br>
                        <label name="quantity">Quantity</label>
                        <input type="number" name="quantity" min="0" max="5" value ="0"></input>
                        <br>
                        <label name="size">List sizes here</label>
                        <textarea name="sizes" rows="2" cols="5" placeholder="eg. 2 small 1 medium "></textarea>
                        <p>Details: Black and white varsity jacket with hood and two pockets. The bottons are black 
                            logo is near the bottom. Available sizes: S-XL</p>
                    </div>
                    <div id="card2" class="card">
                        <img src="africa-black-power-unisex-poly-cotton-t-shirt.jpeg" alt="">
                        <p>Price: $2,200.00</p>
                        <br>
                        <label name="quantity">Quantity</label>
                        <input type="number" name="quantity" min="0" max="5" value ="0"></input>
                        <br>
                        <label name="size">List sizes here</label>
                        <textarea name="sizes" rows="2" cols="5" placeholder="eg. 2 small 1 medium "></textarea>
                        <p>Details: Black t-shirt with red, green and yellow africa print with black power 
                            power first log. Available sizes: S-L 
                        </p>                       
                    </div>
                    <div id="card3" class="card">
                        <img src="Uba66d64659364dc298b12343599663c36.jpg" alt="">
                        <p>Price: $3,600.00</p>
                        <br>
                        <label name="quantity">Quantity</label>
                        <input type="number" name="quantity" min="0" max="5" value ="0"></input>
                        <br>
                        <label name="size">List sizes here</label>
                        <textarea name="sizes" rows="2" cols="5" placeholder="eg. 26 and 30 "></textarea>
                        <p>Details: White joggers with black 2 large black pockets. Available sizes: 26-34</p>                        
                    </div>
                    <div id="card4" class="card">
                        <img src="best-sneakers-800x800.jpg" alt="">
                        <p>Price: $4,200.00</p>
                        <label name="quantity">Quantity</label>
                        <input type="number" name="quantity" min="0" max="5" value ="0"></input>
                        <br>
                        <label name="size">List sizes here</label>
                        <textarea name="sizes" rows="2" cols="5" placeholder="eg. 9 and 10"></textarea>
                        <p>Details: Black and white Nike sneakers. Available sizes: 9-13</p>
                    </div>
                </div> 
                <br>
                <br>
                <div id="total" class="hidden">
                    <p></p>
                </div>
            </section>
            <section id="customerinfo">
                <p>Please complete the form.</p>
                <form>
                    <fieldset>
                        <legend>Customer Information:</legend>
                        <label name="Fullname">Full name</label>
                        <input type="text" name="Fullname" id=fullname placeholder="John Brown" required></input>
                        <br>
                        <label name="phonenumber">Phone number</label>
                        <input type="telephone" name="phonenumber" id=phonenumber placeholder="John Brown" required></input>
                        <br>
                        <label name="email">Phone number</label>
                        <input type="email" name="email" id="email" placeholder="Johnbrown@gmail.com" required></input>
                        <br>
                        <label for="paymenttype"> Payment Method</label>
                        <select id="paymenttype" name="level">
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Direct Deposit">Direct Deposit</option>
                            <option value="Credit Card">Credit Card</option>
                        </select>
                        <br>
                        <br>
                    </fieldset>
                </form>
                <a href="#">See invoice</a>
                <br>
                <br>
            </section>   
        </main>
        <footer>
            <!--<?php include 'footer.php';?>-->
            <p>Copyright &copy; 1999-" . date("Y") . " Omari Brown </p>
        </footer>
    </body>
</html>