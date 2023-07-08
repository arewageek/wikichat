from flask import Flask, request, jsonify
import openai

# configurations
app = Flask(__name__)
openai.api_key = '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'

@app.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headerss.add('Access-Control-Allow-Headers', 'Content-Type')
    return response

@app.route('/', methods=['GET'])
def hello():
    return jsonify("Content generated")
    prompt = request.args.get('prompt')
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt
    )
    generated_text = response.choices[0].text.strip()
    return generated_text


if __name__ == '__main__':
    app.run(debug=True)