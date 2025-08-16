from flask import Flask, request, jsonify

# Inicializa a aplicação Flask
app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze_text():
    data = request.get_json()

    if not data or 'text' not in data:
        return jsonify({"error": "O campo 'text' é obrigatório no JSON."}), 400

    text = data['text']
    
    word_count = len(text.split())
    char_count = len(text)

    response = {
        "text_received": text,
        "analysis": {
            "word_count": word_count,
            "character_count": char_count
        }
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)