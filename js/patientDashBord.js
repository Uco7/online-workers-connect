
    document.addEventListener('DOMContentLoaded', () => {
        const navItems = document.querySelectorAll('ul li');
        const active =document.querySelector('.active')
  
        navItems.forEach(item => {
          item.addEventListener('mouseover', () => {
            item.classList.add('active');
            active.classList.remove('active');
            active=item;
            
          });
          item.addEventListener('mouseout', () => {
            if (item!==active) {
              item.classList.remove('active' )
              
            }
            active.addEventListener('mouseover',()=>{
              active.classList.add('active');
            })
            
          });
        });
        $(document).ready(function() {
            $("#purchase_card").click(function(event) {
                event.preventDefault();
             
                $(".wrap-form").css("display","block");
              
                $(".wrap-table3").css("display","none")
                $(".wrap-table2 ").css("display","none")
                $(".wrap-table1").css("display","none")
            });
        
            $("#test-result").click(function(event) {
                event.preventDefault();
                $(".wrap-table3").css("display","none")
                $(".wrap-table2  ").css("display","block")
                $(".wrap-table1").css("display","none")
                $(".wrap-form").css("display","none");
            });
        });
      });
