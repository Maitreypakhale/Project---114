function preload()
{

}

function take_snapshot()
{
    save('Maitrey.png')
}

function setup()
{
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function draw()
{
    image(video,0,0,300,300)
}