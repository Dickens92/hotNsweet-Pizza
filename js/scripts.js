var price , crust_price, topping_price ;
let total = 0;
function Deliverpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


// proceed button
$(document).ready(function(){
  
  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let pizzatopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       pizzatopping.push($(this).val());
   });
   console.log(pizzatopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1800;
       console.log(price);
     break;
     case "medium":
       price = 1200;
       console.log("The price is "+price);
     break;
     case "small":
       price = 720;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Flat Bread":
        crust_price = 200;
      break;
      case "Cheese Crust":
        crust_price = 250;
      break;
      case "Staffed Crust":
        crust_price = 180;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = pizzatopping.length*100;
    console.log("toppins value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Kindly chose your preffered size and crust or contact us for Guidance"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatoppings").html(pizzatoppings.join(", "));
    $("#totals").html(total);
    

    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let pizzatopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          pizzatopping.push($(this).val());
      });
      console.log(pizzatoppings.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1800;
           console.log(price);
         break;
         case "medium":
           price = 1200;
           console.log("The price is "+price);
         break;
         case "small":
           price = 720;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Flat Bread":
            crust_price = 90;
          break;
          case "Cheese Crust":
            crust_price = 120;
          break;
          case "Staffed Crust":
            crust_price = 150;
          break;
          default:
            console.log("No price"); 
        }
        let topping_value = pizzatoppings.length*100;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // constractor function
      var newOrder = new Deliverpizza(pname, psize, pcrust,pizzatoppings,total);

      $("#customerorders").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    // Checkout button
    $("button#Checkout").click(function(){ 
      $("button#Checkout").hide();
      $("button.addPizza").hide();
      $("button.send").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Please pay a total of Ksh. "+CheckoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+CheckoutTotal);
    });

    // home delivery button
    $("button.Send").click(function(){
      $(".packedpizza").hide();
      $(".select h2").hide();
      $(".Send").slideDown(1000);
      $("#addedprice").hide();
      $("button.Send").hide();
      $("#pizzatotal").hide();
      let sendingcost = checkoutTotal+150;
      console.log("You will pay sh. "+sendingcost+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+ sendingcost);
    });

    // when one clicks place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#last-order").hide();
      let sendingcost= checkoutTotal+150;
      console.log("Final Bill is: "+sendingcost);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#Pickup-location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#Pickup-location").val()!=""){
  
        $("#notification").append(person+", Your Order Details have been Received and after processing, it will be sent to "+location+ ". Carry Ksh. "+sendingcost);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});