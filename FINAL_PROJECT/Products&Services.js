function myFunction() {
            var txt;
              if (confirm("An item has been added to your cart.")) {
              txt = "The item is in your cart.";
              } else {
              txt = "canceled!";
              }
          document.getElementById("demo").innerHTML = txt;
          }