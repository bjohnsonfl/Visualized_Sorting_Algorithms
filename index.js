//index.js
$(document).ready(function() {
    
   
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioCtx = new AudioContext();
    //var oscillator = audioCtx.createOscillator();
    //oscillator.type = 'square';
    //oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
   // oscillator.connect(audioCtx.destination);
    //oscillator.start();
    var startFreq = 400;
    var endFreq = 1000;
    var diff = 0;
    function soundGenerator (val) {
        diff = endFreq - startFreq;
        val = ((val/ 100) * diff) + startFreq;   // take the percent, multiply by the diff, add the offset.
                                                    // this will never be startFreq because val will never be zero
        
    //var audioCtx = new AudioContext();
    var oscillator = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    oscillator.type = 'square';
    //oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
    oscillator.connect(gain);
    gain.connect(audioCtx.destination);
    oscillator.frequency.value = val;
    console.log("freq: " +val);
    oscillator.start();
    gain.gain.setTargetAtTime(1, audioCtx.currentTime, 0.01); // my attempt at an adsr envelope without matlab
    gain.gain.setTargetAtTime(0, audioCtx.currentTime+(time/1000), 0.05);
    oscillator.stop(audioCtx.currentTime + 1);//2*(time/1000) );
    //oscillator.disconnect(audioCtx.destination);
    }


    var area = $(".area");
    var size = 50;
    var time = 10; //20
    var myHeap = heap;
    $("#but1").click(render);
    $("#but2").click(bubble_sort);
    $("#but3").click(insertion_sort);
    $("#but4").click(merge_sort);
    $("#but5").click(quick_sort); 
    $("#but6").click(heap_sort);
    $("#but7").click(function(){
        render();
        print(number)
       
        for(i = 0; i< size; i++)
        {
            console.log("number: " + number[i]);
            print(number);
            myHeap.heapify(number[i], moveAnimate_Func,swapAnimate_Func);
            print(myHeap.arr);
        }
       // animate();
        console.log("//////////////////////");
        console.log("//////////////////////");
        console.log("//////////////////////");
        for(i = 0; i< size; i++)
        {
            console.log(myHeap.removeTop(moveAnimate_Func, swapAnimate_Func));
            console.log("i: "+i + " n: "+ myHeap.n);
            print(myHeap.arr);
        }
        animate();
        });
    $("#but8").click(radix_sort_LSD);
 
function render()
{
    randomGenerator(size);
    area.empty();
    number.forEach(function(value,index){
        area.append("<div id = 'bar"+index+"' class = 'sortBars'>"+value+"</div>");
       $("#bar"+index).css({
           "height":value + "%", 
           "top":(100-value)+"%",
           "left":(index*2)+"%"
           // "right":(100-index*2)+"%"
        });

    });
    print(number);
}
function radix_sort_LSD(){
    radixSortLSD(number, size, 100, moveAnimate_Func, highLightAnimate_Func);
    animate();
}
function heap_sort(){
    heapSort(number, size, swapAnimate_Func, moveAnimate_Func);
    animate();
}

function insertion_sort(){
    insertionSort(number, size, moveAnimate_Func);
    animate();
}

function merge_sort(){
    mergeSort(number, size, 0, (size-1), swapAnimate_Func);
    animate();
}

function quick_sort(){
    quickSort(number, size, 0, (size-1), swapAnimate_Func,quickSortSwapAnimate_Func );
    animate();
}

function bubble_sort() {
    bubbleSort(number, size, swapAnimate_Func);
    animate();

}
var quickSortSwapAnimate_Func = function quickSortSwapAnimate(i,j,iMinus, jVal, iMinusVal, pivot){
    swaps.push ( function(){
        /*$("#bar"+i).css({
            "background" : "red"});
        $("#bar"+j).css({
             "background" : "blue"});
         $("#bar"+iMinus).css({
                "background" : "blue"});*/
        $("#bar"+i).toggleClass("sortBars highlightRed");        
        $("#bar"+j).toggleClass("sortBars highlight");
        $("#bar"+iMinus).toggleClass("sortBars highlight"); 
            
        },function(){
        
        $("#bar"+i).css({
            "height":jVal + "%", 
            "top":(100-jVal)+"%"
            //,"left":(i*2)+"%"
            //,"right":(102-i*2)+"%"
        });
        $("#bar"+i).text(jVal);
        soundGenerator(jVal);
   
        
        $("#bar"+j).css({
            "height":iMinusVal + "%",
            "top":(100-iMinusVal)+"%"
           // ,"left":(j*2)+"%"
            //"right":(102-j*2)+"%"
        });
        $("#bar"+j).text(iMinusVal);
        soundGenerator(iMinusVal);

        $("#bar"+iMinus).css({
            "height":pivot + "%",
            "top":(100-pivot)+"%"
           // ,"left":(j*2)+"%"
            //"right":(102-j*2)+"%"
        });
        soundGenerator(iMinus);
        $("#bar"+iMinus).text(pivot);
    },
    function(){
        /*$("#bar"+i).css({
            "background" : "green"});
        $("#bar"+j).css({
             "background" : "green"});
      $("#bar"+iMinus).css({
            "background" : "green"});*/
        $("#bar"+i).toggleClass("sortBars highlightRed");        
        $("#bar"+j).toggleClass("sortBars highlight");
        $("#bar"+iMinus).toggleClass("sortBars highlight");

    });

}

var swapAnimate_Func = function swapAnimate(i,j,numI, numJ)
{
   

    swaps.push ( function(){
       /* $("#bar"+i).css({
            "background" : "blue"});
        $("#bar"+j).css({
             "background" : "blue"}); 
             //*/
             
         $("#bar"+i).toggleClass("sortBars highlight");
         $("#bar"+j).toggleClass("sortBars highlight"); 
         //*/
        },function(){
        
        $("#bar"+i).css({
            "height":numI + "%", 
            "top":(100-numI)+"%"
            //,"left":(i*2)+"%"
            //,"right":(102-i*2)+"%"
        });
        $("#bar"+i).text(numI);
        soundGenerator(numI);
   
     //console.log(numJ);
        $("#bar"+j).css({
            "height":numJ + "%",
            "top":(100-numJ)+"%"
           // ,"left":(j*2)+"%"
            //"right":(102-j*2)+"%"
        });
        $("#bar"+j).text(numJ);
        soundGenerator(numJ);
    },
    function(){
        /*$("#bar"+i).css({
            "background" : "green"});
        $("#bar"+j).css({
             "background" : "green"});
            //*/
            //*
        $("#bar"+i).toggleClass("sortBars highlight");
        $("#bar"+j).toggleClass("sortBars highlight"); 
         //*/
    });
       
  
}
var highLightAnimate_Func = function highLightAnimate_Func(i)
    {
        swaps.push ( function(){
           // $("#bar"+i).css({
            //    "background" : "blue"});
            $("#bar"+i).toggleClass("sortBars highlight");
            },
        function(){
            //$("#bar"+i).css({
                //"background" : $(".highlight").css("background")});
               // console.log("this is css: " + $(".highlight").css("background"));
               $("#bar"+i).toggleClass("sortBars highlight");
        });
    }
var moveAnimate_Func = function moveAnimate (i, numI)
{
    swaps.push ( function(){
        $("#bar"+i).css({
            "background" : "blue"});
        //*/
        /*
          $("#bar"+i).toggleClass("sortBars highlight");
          //*/
        },function(){
        soundGenerator(numI);
        $("#bar"+i).css({
            "height":numI + "%", 
            "top":(100-numI)+"%"
            //,"left":(i*2)+"%"
            //,"right":(102-i*2)+"%"
        });
        $("#bar"+i).text(numI);
    },
    function(){
        $("#bar"+i).css({
           "background" : "green"});
        //*/
        /*
         $("#bar"+i).toggleClass("sortBars highlight");
         //*/
       
    });

}

var animate = function  () {

    if(swaps.length > 0 )
    {
        setTimeout(function() {
         swaps[0]();
         swaps.shift();
            animate();
        }, time);
    }
}


});