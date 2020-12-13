from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<name>')
def hello(name):
    print(name)
    return "Hi, " + name

@app.route('/repeat/<num>/<string>')
def repeat_string(string, num):
    return (string+' ')*int(num)

if __name__ == "__main__":
    app.run(debug=True)