import openai

openai.api_key = 'YOUR_OPENAI_API_KEY'

def generate_prompt(diary_content):
    """ GPT-4 API 요청을 통해 감정일기 분석 및 스토리 생성 """
    response = openai.Completion.create(
        engine="gpt-4",
        prompt=f"Analyze this diary entry and generate a 4-cut comic story: {diary_content}",
        max_tokens=200,
        temperature=0.7
    )
    return response.choices[0].text.strip()
