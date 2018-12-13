//numberGenerator.js

var number = [];
var swaps =[];
//var hold;
var time =0;
var count = 0;
function randomGenerator (size) {
    for(i = 0; i<size; i++)
    {
        number[i] = Math.floor(Math.random() * 100)+1;   
        
    };
}


function print(nums){
   text = "";
    for (x in nums) 
    {
        text += nums[x];
        text += " ";
       
    }
    console.log("print start....");
    console.log(text+"\n");
    console.log("print complete");
}

function bubbleSort(nums, n, updatefunc) {

    var hold;
    for(i = 0; i<n; i++)
    {
        for(j = 0; j<n-i-1; j++)
        {
            if(nums[j]>nums[j+1]){
                hold=nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = hold;
                updatefunc(j,(j+1),nums[j], nums[(j+1)]);
                 
            }
        }
    }
}

function quickSort (  arr,  n,  lo,  hi, swapUpdate, quickSortUpdate)
{
    //printArray(arr, n);
    var hold = 0;
    var pivot = 0;
    var i = 0;
    
    if (lo == hi || lo > hi || hi < lo)  {
        //printArray(arr, n);
        //break;
    }
   else if( (hi-lo) == 1)
    {
        if (arr[lo] > arr [hi])
        {
            hold = arr[hi];
            arr[hi] = arr[lo];
            arr[lo] = hold;
            swapUpdate(lo,hi,arr[lo], arr[hi]);
        }
       // printArray(arr, n);
       print(arr);
       console.log("else if");
       // break;
    }

   else {
       pivot = arr[hi];
       i = hi;
       for(  j = lo ; j < i; j++){
           
           while( arr[j] > pivot)
           {
              // hold = arr[i];
               arr[i] = arr[j];
               arr[j] = arr[i-1];
               arr[i-1] = pivot;
               quickSortUpdate(i,j,(i-1),arr[i], arr[j], arr[(i-1)]);
               i--;
               print(arr);
               console.log("while");
              // printArray(arr, n);
           }
           //cout << "j = " << j <<endl;

       }
       quickSort(arr, n, lo, i-1, swapUpdate, quickSortUpdate);
       quickSort(arr, n, i+1,hi, swapUpdate,quickSortUpdate);
   }
}

function mergeSort( arr,  n,  lo,  hi, swapUpdate)
{
    
     LL=0;
     LH=0;
    HL=0;
     HH=0; 
     half = 0;
     hold = 0;
    //567
    
    LL = lo;
    HH = hi;
    
    half = Math.floor((HH - LL + 1) / 2);
    
    LH = LL + half;
    HL = LH + 1;
    if ( n == 1 || n == 0)
    {
        //printArrayLimit(arr, 17, LL, LH);
        //print array
        console.log("n: "+n);
        print(arr);
    }
    else if( n == 2) {
        if(arr[lo] > arr[hi])
        {
            hold = arr[hi];
            arr[hi] = arr[lo];
            arr[lo] = hold;
            swapUpdate(lo, hi, arr[lo], arr[hi]);
        }
        //printArrayLimit(arr, 17, LL, LH);
        //print array
    }
    else{
     //printArrayLimit(arr, 17, LL, LH);
     //print array
     console.log("n: "+n+"in the else");
    mergeSort(arr, (LH-LL+1), LL, LH, swapUpdate);
    mergeSort(arr, (HH - HL + 1), HL, HH, swapUpdate);
    }
    
}


function insertionSort ( arr ,  n, moveAnimateFunc)
{
     iter = 0, val = 0;
    for ( i = 1; i < n; i++)             // start at postion 1, pos 0 is already sorted. iterate up the array
    {
        iter = i;
        val = arr[i];                       // the current postion value to be checked
        
        while (arr[iter-1] > val && iter > 0)
                                // look at postion before (the largest sorted value) till find smaller number
        {
            arr[iter] = arr[iter-1];   // move larger value to the right by one and decrement the iterator
            moveAnimateFunc(iter, arr[iter]);
            iter--;
            //printArray (arr, n);
        }
        arr[iter] = val;            // store the correct value
        moveAnimateFunc(iter, arr[iter]);
        //printArray (arr, n);
        print(arr);
    }
}

//child 2i+1 2i+2
//parent Math.floor(((i-1)/2))
function heapSort(arr, size, swapUpdate,moveAnimateFunc){
    var newHeap = heap;
    for(i = 0; i< size; i++) {newHeap.heapify(arr[i], moveAnimateFunc,swapUpdate);}
    print(newHeap.arr);
    console.log("////\\\\////\\\\///\\\\");
    console.log("/////\\\\\\\\\\");
    newHeap.sort(size, moveAnimateFunc, swapUpdate);
        

}
var heap =  {
    arr: [],
    n: 0,
    child: {
        left: 0,
        right: 0
    },
    parent : 0,
    setParent : function (i)
        {this.parent = Math.floor(((i-1)/2)); },
    setChild : function(i){
        this.child.left = 2*i+1;
        this.child.right = 2*i +2;
    },
    heapify : function (val, moveAnimateFunc, swapUpdate)
        {
            this.n;
            iter = this.n;
            this.arr[iter] = val;
            moveAnimateFunc(iter, this.arr[iter]);
            this.setParent(iter);

            while( this.arr[this.parent] < val && this.parent >= 0){
                
                hold = this.arr[this.parent];   //swap the parent val with child
                this.arr[this.parent] = val;
                this.arr[iter] = hold;
                swapUpdate(this.parent, iter, this.arr[this.parent], this.arr[iter]);
                iter = this.parent;
                this.setParent(iter);
                
            }
            this.n++;
            console.log("n: "+this.n);
        },
    removeTop   : function(moveAnimateFunc,swapUpdate)
    {
        value = this.arr[0]; //save the top value
        this.n--;          //reduce the size to get the last value (due to zero based indexing)
        this.arr[0] = this.arr[this.n]; //put the bottom value at top
        this.arr[this.n] = value;
        iter = 0;
        swapUpdate(0, this.n, this.arr[0], this.arr[this.n]);
        this.setChild(iter);
        done = false;
       // while(this.arr[iter]< this.child.left || this.arr[iter]< this.child.right && iter > ())
      // while (this.child.left || this.child.right) 
        while((this.child.left < this.n || this.child.right < this.n) && !done)
        {
            if(this.arr[iter] <= this.arr[this.child.left] || this.arr[iter] <= this.arr[this.child.right]){
                if( this.child.right >= this.n && this.arr[iter] <= this.arr[this.child.left] ){
                    hold = this.arr[this.child.left];  //swap
                    this.arr[this.child.left] = this.arr[iter];
                    this.arr[iter] = hold;
                    swapUpdate(this.child.left, iter, this.arr[this.child.left], this.arr[iter]);
                    iter = this.child.left;
                    this.setChild(iter);
                }
                else if((this.arr[this.child.left]>=this.arr[this.child.right]) && this.child.left<this.n){
                    hold = this.arr[this.child.left];  //swap
                    this.arr[this.child.left] = this.arr[iter];
                    this.arr[iter] = hold;
                    swapUpdate(this.child.left, iter, this.arr[this.child.left], this.arr[iter]);
                    iter = this.child.left;
                    this.setChild(iter);
                    
                }
                else if((this.arr[this.child.right]>this.arr[this.child.left]) &&(this.child.right<this.n)){
                    hold = this.arr[this.child.right];  //swap
                    this.arr[this.child.right] = this.arr[iter];
                    this.arr[iter] = hold;
                    swapUpdate(this.child.right, iter, this.arr[this.child.right], this.arr[iter]);
                    iter = this.child.right;
                    this.setChild(iter);
                }
                else{
                done = true;
                }
            }
            else {done = true;}
        }
        //print(this.arr);
        //this.arr[this.n] = val;
        //moveAnimateFunc(this.n, value);
        return value;
    },
    sort : function(size, moveAnimateFunc,updatefunc){
        //uses the known size of the given array to sort, not the size of the heap
        for(i = 0; i < size; i++)
        {
            values = this.removeTop(moveAnimateFunc,updatefunc);
           // this.arr[this.n] = val;
            console.log("i: "+i +"n: "+this.n + "val: "+values) ;
            print(this.arr);

        }
    }
}

//RADIX LSD SORT 
/*
use 4 buckets (2bits).
first pass through the array, count the number of keys. dynamically create the buckets.
    (or maybe not for js, arrays are objects)
second, grab the bottom 2 lsb's. shift the number to right 2*n times and & 0b11 to determine the bucket.
put the value into the corresponding bucket.
third, re populate the array with the newly sorted numbers. 
fourth, return to second until every bit is accounted for

*/
function radixSortLSD (arr, n, largestNumber, moveAnimateFunc, highLightAnimateFunc){

    var bin00 = [];
    var bin01 = [];
    var bin10 = [];
    var bin11 = [];
    var shiftAmount = 0;
    var val = 0;
    var iter = 0;
    //determine how many bits need to be compared 
    var bits = Math.ceil(Math.log2(largestNumber)); 
    console.log("number of bits: " +bits);
    bits = Math.ceil(bits / 2);

    for(i = 0; i< bits; i++){                //each radix
            shiftAmount = i * 2;
            console.log("shift amount "+shiftAmount);
            for(j=0;  j<n; j++){           // each value to sort
                highLightAnimateFunc(j);
                val = arr[j] >> shiftAmount;        //shift poi bits to end
                val = val & 0x3;                     // grab the two bits
                console.log("j: " + j+ " val: "+val);
            
                switch (val) {
                    case 0x00:
                        bin00.push(arr[j]);
                        break;
                    case 0x01:
                        bin01.push(arr[j]);
                        break;
                     case 0x02:
                        bin10.push(arr[j]);
                        break;
                    case 0x03:
                        bin11.push(arr[j]);
                        break;
                    default:
                        console.log("error, in the switch case default, figure it out");
                        break;
                }
            }
                                    // now replace the values back into the array
            for (x in bin00)
            {
                arr[iter] = bin00[x];
                moveAnimateFunc(iter, arr[iter]);
                iter++;
            }
            bin00.length=0;
            for (x in bin01)
            {
                arr[iter] = bin01[x];
                moveAnimateFunc(iter, arr[iter]);
                iter++;
            }
            bin01.length=0;
            for (x in bin10)
            {
                arr[iter] = bin10[x];
                moveAnimateFunc(iter, arr[iter]);
                iter++;
            }
            bin10.length=0;
            for (x in bin11)
            {
                arr[iter] = bin11[x];
                moveAnimateFunc(iter, arr[iter]);
                iter++;
            }
            bin11.length=0;
            console.log("iter should equal "+n+ ". iter: "+iter);
            iter = 0;  
            print (arr);
        }



}