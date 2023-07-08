from flask import Flask, request, jsonify
import openai

# configurations
app = Flask(__name__)
openai.api_key = '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'

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