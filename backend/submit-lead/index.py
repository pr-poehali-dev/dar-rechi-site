"""
Сохраняет заявку с сайта в Google Таблицу.
"""
import json
import os
from datetime import datetime

import gspread
from google.oauth2.service_account import Credentials


SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
SPREADSHEET_ID = "14hB53IDBvC6OLi77FWUUFWytCs4gkfBOz8q-YC4IWIE"


def get_sheet():
    creds_json = os.environ["GOOGLE_SERVICE_ACCOUNT_JSON"]
    creds_dict = json.loads(creds_json)
    creds = Credentials.from_service_account_info(creds_dict, scopes=SCOPES)
    gc = gspread.authorize(creds)
    sh = gc.open_by_key(SPREADSHEET_ID)
    return sh.sheet1


def handler(event: dict, context) -> dict:
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
        name = body.get("name", "").strip()
        phone = body.get("phone", "").strip()
        service = body.get("service", "").strip()
        age = body.get("age", "").strip()
        comment = body.get("comment", "").strip()

        if not name or not phone:
            return {
                "statusCode": 400,
                "headers": cors_headers,
                "body": json.dumps({"error": "Имя и телефон обязательны"}),
            }

        sheet = get_sheet()

        # Добавляем заголовки если таблица пустая
        if sheet.row_count == 0 or not sheet.row_values(1):
            sheet.append_row(["Дата", "Имя", "Телефон", "Услуга", "Возраст", "Комментарий"])

        now = datetime.now().strftime("%d.%m.%Y %H:%M")
        sheet.append_row([now, name, phone, service, age, comment])

        return {
            "statusCode": 200,
            "headers": cors_headers,
            "body": json.dumps({"ok": True}),
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": cors_headers,
            "body": json.dumps({"error": str(e)}),
        }
