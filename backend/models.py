# models.py
class DiaryEntry:
    def __init__(self, id, date, content, sns_usage, image_path):
        self.id = id
        self.date = date
        self.content = content
        self.sns_usage = sns_usage
        self.image_path = image_path

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "content": self.content,
            "sns_usage": self.sns_usage,
            "image_path": self.image_path
        }
