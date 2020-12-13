from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/<x>')
def createBoard(x=4):
    return render_template('number.html', times = int(x))

@app.route('/<x>/<y>')
def customBoard(x, y):
    return render_template('grid.html', row= int(x), column= int(y))

if __name__ == "__main__":
    app.run(debug=True)