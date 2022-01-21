

// Age Calculator area start

const age_counter = document.getElementById('age-counter');
const counter = document.querySelector('.counter');


age_counter.addEventListener('submit', function(e){

    e.preventDefault();

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;

    let start_time = new Date( date + " " + time );
    let end_time = new Date();

    setInterval(() =>{


        let time_diff = Math.floor(end_time.getTime() - start_time.getTime());

        let total_sec = Math.floor( time_diff / 1000 );
        let total_min = Math.floor( total_sec / 60 );
        let total_hours = Math.floor( total_min / 60 );
        let total_day = Math.floor( total_hours / 24 );
        let total_week = Math.floor( total_day / 7 );
        let total_month = Math.floor( total_day / 30 );
        let total_year = Math.floor( total_month / 12 );

        let month = total_month - ( total_year * 12 );
        let day = total_day - ( total_year * 12 * 30 ) - ( month * 30 );

        counter.innerHTML = ` 
        
        Age : <br> Total year: ${ total_year } <br> Total Month: ${ total_month } <br> Total Week: ${ total_week } <br> Total day: ${ total_day } <br> Total hours: ${ total_hours } <br> Total nin: ${ total_min } <br> Total sec: ${ total_sec }
        
        `;


    }, 1000);

});

// Age Calculator area end



// product width list area start

const add_product = document.getElementById('add_product');
const cls = document.getElementById('cls');
const plist = document.getElementById('plist');
const add_box = document.querySelector('.procuct-add-box')


add_product.addEventListener('click', function(e){

    e.preventDefault();

    add_box.style.display = 'block';
    cls.style.float = 'right';
});

cls.addEventListener('click', function(){

    add_box.style.display = 'none';
    
});


let products = dataGet('products');


products.map(data => {

    plist.innerHTML += ` 
    <div class="col-md-3 my-3">
        <div class="card">
            <img class="card-image" src="${data.photo}" alt="">
            <div class="card-body">
                <h3 style="color:blue;
                font-size: 40px;font-weight: bold;">${data.name}</h3>
                <p><span class="regular-price">$200</span> <span class="sel-price">$180</span></p>
                <br>
                <button style="color:white;font-size:20px;" class="btn btn-info">Add to card</button>
            </div>
        </div>
    </div> 
    
    `;
});

// product width list area end

// Team member list area start

const add_member = document.getElementById('add_member');
const cross = document.getElementById('cross');
const member_add_box = document.querySelector('.member_add_box');


add_member.addEventListener('click', function(e){

    e.preventDefault();

    member_add_box.style.display = 'block';
    cross.style.float = 'right';
});

cross.addEventListener('click', function(){

    member_add_box.style.display = 'none';
    
});

// Team member list area end

