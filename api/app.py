from flask import Flask, request, jsonify
import openai
import os


# configurations
app = Flask(__name__)

API_KEY = os.getenv('OPENAI_API_KEY')

openai.api_key = API_KEY


@app.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response

@app.route('/', methods=['GET'])
def hello():
    # return "Content generated"
    prompt = request.args.get('prompt')
    output = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt
    )
    generated_text = output.choices[0]
    return generated_text


if __name__ == '__main__':
    app.run(debug=True)