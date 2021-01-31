const ViewCount = document.getElementById('views');
const CostCount = document.getElementById('cost');
const slider = document.getElementById('myRange');
const ToggleButton = document.getElementById('tgl-btn');
const MoY = document.getElementById('moy')

function PricingCheck(slider){
    var x =slider.value;
    
    if (x == 2){
        ViewCount.innerHTML = '10K ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$6';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$8';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 0%, #eaeefb 0%)';
        slider.style.background = color;

    }else if (x == 4){
        ViewCount.innerHTML = '50K ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$9';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$12';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 30%, #eaeefb 30%)';
        slider.style.background = color;

    }else if (x == 6){
        ViewCount.innerHTML = '100K ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$12';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$16';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 50%, #eaeefb 50%)';
        slider.style.background = color;

    }else if (x == 8){
        ViewCount.innerHTML = '500K ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$18';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$24';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 70%, #eaeefb 70%)';
        slider.style.background = color;
        
    }else if (x == 10){
        ViewCount.innerHTML = '1M ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$27';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$36';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 100%, #eaeefb 100%)';
        slider.style.background = color;
    }
}


slider.addEventListener('input', function(){
    var x =this.value;
    
    if (x == 2){
        ViewCount.innerHTML = '10K ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$6';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$8';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 0%, #eaeefb 0%)';
        slider.style.background = color;

    }else if (x == 4){
        ViewCount.innerHTML = '50K ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$9';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$12';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 30%, #eaeefb 30%)';
        slider.style.background = color;

    }else if (x == 6){
        ViewCount.innerHTML = '100K ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$12';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$16';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 50%, #eaeefb 50%)';
        slider.style.background = color;

    }else if (x == 8){
        ViewCount.innerHTML = '500K ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$18';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$24';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 70%, #eaeefb 70%)';
        slider.style.background = color;
        
    }else if (x == 10){
        ViewCount.innerHTML = '1M ';
        if(ToggleButton.classList.contains('active')){
            CostCount.innerHTML = '$27';
            MoY.innerHTML = '&nbsp;/ year';
        }else {
            CostCount.innerHTML = '$36';
            MoY.innerHTML = '&nbsp;/ month';
        }
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) 100%, #eaeefb 100%)';
        slider.style.background = color;
    }
});


ToggleButton.addEventListener('click', function(){
    if(ToggleButton.classList.contains('not-active') || ToggleButton.classList.contains('butt')){
        ToggleButton.classList.remove('not-active')
        ToggleButton.classList.remove('butt')
        ToggleButton.classList.add('active')
        PricingCheck(slider)
    }else {
        ToggleButton.classList.remove('active')
        ToggleButton.classList.add('not-active')
        PricingCheck(slider)
    }
});