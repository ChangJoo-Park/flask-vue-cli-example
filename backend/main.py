from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
  return render_template('app.html')

@app.route('/<path:page>')
def fallback(page):
  return render_template('app.html')

if __name__ == '__main__':
  app.debug = True
  app.run()