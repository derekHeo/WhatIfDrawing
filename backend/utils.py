def format_date(date_str):
    """ 날짜 형식 변경 (YYYY-MM-DD -> DD/MM/YYYY) """
    year, month, day = date_str.split('-')
    return f"{day}/{month}/{year}"
