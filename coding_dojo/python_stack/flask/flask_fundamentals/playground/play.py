from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def main():
    return "Hi"

@app.route('/play')
def createTemplate():
    return render_template('index.html')

@app.route('/play/<x>')
def cloneBoxes(x):
    
    return render_template('boxes.html', times=int(x))

@app.route('/play/<x>/<color>')  
def boxesWithColor(x=3,color="blue"):
    return render_template('color.html', times= int(x), color= color)


if __name__ == "__main__":
    app.run(debug=True)