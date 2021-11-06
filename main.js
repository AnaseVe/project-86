var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabriic.Image.fromURL('BirthdayImage.jpg', function(Img)
    {
        block_image_object.saleToWidth(700);
        block_image_object.scaleToHeiht(510);
        block_image_object.set({
            top:0,
            left:0
        });
    }
canvas.add(block_image_object);
}

function playSound(){
	x.play();
}
block_image_object({
    top:0, 
    left:0
});
canvas.add(block_image_object);