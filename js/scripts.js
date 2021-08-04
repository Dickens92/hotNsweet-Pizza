var price , crust_price, topping_price ;
let total = 0;
function Deliverpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}



$(document).ready(function(){
  
  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

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
      case "Flatbread":
        crust_price = 90;
      break;
      case "Cheesecrust":
        crust_price = 120;
      break;
      case "Staffedcrust":
        crust_price = 150;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = ptopping.length*100;
    console.log("toppins value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Dear Customer! Select Your Preffered Size and Crust. Contact us for Further Guidance"); 
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
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    

    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
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
          case "Flatbread":
            crust_price = 90;
          break;
          case "Cheesecrust":
            crust_price = 120;
          break;
          case "Staffedcrust":
            crust_price = 150;
          break;
          default:
            console.log("No price"); 
        }
        let topping_value = ptopping.length*100;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      
      var newOrder = new Deliverpizza(pname, psize, pcrust,ptopping,total);

      $("#customerorders").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.send").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });

    
    $("button.send").click(function(){
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".sending").slideDown(1000);
      $("#addedprice").hide();
      $("button.send").hide();
      $("#pizzatotal").hide();
      let sendingcost= checkoutTotal+150;
      console.log("You will pay sh. "+deliceryamount+" on delivery");
      $("#totalbill").append("Full amount: "+sendingcost);
    });

    
    $("button#last-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".sending").hide();
      $("button#last-order").hide();
      let sendingcost= checkoutTotal+150;
      console.log("Final Bill is: "+sendingcost);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let place = $("input#place").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#place").val()!=""){
  
        $("#notification").append(person+", Your order is complete. After processing, your pizza will be Delivered to "+place+ ". Prepare sh. "+sendingcost);
        $("#totalbill").hide();
        $("#notification").slideDown(1200);
      }
      else {
        alert("Enter your personal details as listed below to aid in delivery!");
        $(".delivery").show();
        $("button#last-order").show();
      }
    });
   event.preventDefault();
  });
});