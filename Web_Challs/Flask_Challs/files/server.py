from flask import Flask, send_from_directory
from os import getenv

app = Flask(__name__)

@app.route('/')
def home():
   return send_from_directory('.', 'index.html')

@app.route('/robots.txt')
def robots():
    return send_from_directory('.', 'robots.txt')

@app.route('/l33t_hax0r.html')
def flag():
    return send_from_directory('.', 'l33t_hax0r.html')

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=9999)