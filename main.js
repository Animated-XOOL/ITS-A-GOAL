var canvas = new fabric.canvas(myCanvas)
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width=5;
block_image_height=5;

function load_img(){
    faabric.image.FromURL("https://lh3.googleusercontent.com/proxy/SAeCSacvsx7meJiKCOH2Y2GsQy59KWSc4Wiz8LERBKhTC17LzFxMBwP2O4ruGQKmxTjrreipRys7dNTiBmtLD2lW", function(img){
        hole_obj = img;
        hole_onj.scaleToWidth(50);
        hole.obj.scaleToHeight(50);
        hole_obj.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
    });
     new_image();
}

function new_image()
{
    fabric.Image.fromURL("https://pngimg.com/uploads/golf/golf_PNG32.png", function(Img){
        ball_obj = img;
        ball_onj.scaleToWidth(50);
        ball.obj.scaleToHeight(50);
        ball_obj.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_obj);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if((ball_x==hole_x)&&(ball_y==hole_y)){
        canvas.remove(ball_obj);
        console.log("your ball is in the goal,gg");
        document.getElementById("myCanvas").style.borderColor="red";
    }
    else{
        if(keypressed == '38')
        {
            up();
            console.log("up");
        }
        if(keypressed == '40')
        {
            up();
            console.log("down");
        }
        if(keypressed == '37')
        {
            up();
            console.log("left");
        }
        if(keypressed == '39')
        {
            up();
            console.log("right");
        }
    }
    function up()
    {
        if(ball_y >=5)
        {
            ball_y = ball_y - block_image_height
            console.log("block image height" = " + block image height");
            console.log("When Up arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
            canvas.remove(ball_obj);
            new_image();
        }
    }
    
    function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}