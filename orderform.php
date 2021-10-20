<!DOCTYPE html>
<html lang="en">
    <head>
        <title>MY Order Form</title>
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
            <h2>Homepage</h2>
            <section id="orderform">  
                <p>Select the items you would like to order</p>
                <div class="grid-container">
                    <div id="card1" class="card">
                        <img src="" alt="">
                        <p>Price: </p>
                        <p>Details: </p>
                        <br>
                        <label name="quantity">Quantity</quantity>
                        <input type="number" name="quantity"></input>
                    </div>
                    <div id="card2" class="card">
                        <img src="" alt="">
                        <p>Price: </p>
                        <p>Details: </p>
                        <br>
                        <label name="quantity">Quantity</quantity>
                        <input type="number" name="quantity"></input>
                    </div>
                    <div id="card3" class="card">
                        <img src="" alt="">
                        <p>Price: </p>
                        <p>Details: </p>
                        <br>
                        <label name="quantity">Quantity</quantity>
                        <input type="number" name="quantity"></input>
                    </div>
                    <div id="card4" class="card">
                        <img src="" alt="">
                        <p>Price: </p>
                        <p>Details: </p>
                        <label name="quantity">Quantity</quantity>
                        <input type="number" name="quantity"></input>
                    </div>
                </div> 
                <br>
                <br>
                <div id="total">
                    <p>onuuon</p>
                </div>
            </section>
            <section id="customerinfo">
                <p>Please complete the form.</p>
                <form>
                    
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