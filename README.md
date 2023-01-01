# jokerx04.com
<br /><br />


## CDN 갱신
```html
<!-- https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@{버전 또는 Hash 코드}/{파일경로 및 파일명} -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@045977b/css/unify-v2.6.3.css" />
<script src="https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@63c6453/js/unify-v2.6.3.js"></script>
```
<br /><br />


## 티스토리 Open API
```
0. Open API 앱 정보

App ID : client_id
Secret Key : client_secret
CallBack : redirect_uri

1. 인증 요청 및 Authentication code 발급(웹페이지 호출)

요청 : https://www.tistory.com/oauth/authorize?client_id={Open API 앱 App ID}&redirect_uri={Open API 앱 CallBack}&response_type=code&state=someValue
응답 : https://{Open API 앱 CallBack}/?code={Authentication code}&state=someValue

2. Access Token 발급(GET)

요청 : https://www.tistory.com/oauth/access_token?client_id={Open API 앱 App ID}&client_secret={Open API 앱 Secret Key}&redirect_uri={Open API 앱 CallBack}&code={Authentication code}&grant_type=authorization_code
응답 : access_token={Access Token}

3. 카테고리 목록 API(GET)

요청 : https://www.tistory.com/apis/category/list?&output=json&blogName={티스토리 주소 xxx.tistory.com 에서 xxx}&access_token={Access Token}
응답 : 
{
  "tistory": {
    "status": "200",
    "item": {
      "url": "jokerx04",
      "secondaryUrl": "blog.jokerx04.com",
      "categories": [
        {
          "id": "682253",
          "name": "밥&죽&떡",
          "parent": "959146",
          "label": "요리/밥&죽&떡",
          "entries": "1",
          "entriesInLogin": "1"
        },
        {
          "id": "828977",
          "name": "잡학",
          "parent": "",
          "label": "잡학",
          "entries": "3",
          "entriesInLogin": "4"
        },
        {
          "id": "908645",
          "name": "[JavaScript] library",
          "parent": "860467",
          "label": "개발/[JavaScript] library",
          "entries": "3",
          "entriesInLogin": "3"
        },
        {
          "id": "836350",
          "name": "기술표",
          "parent": "905586",
          "label": "게임/기술표",
          "entries": "12",
          "entriesInLogin": "12"
        },
        {
          "id": "834696",
          "name": "[jQuery] Plugin",
          "parent": "860467",
          "label": "개발/[jQuery] Plugin",
          "entries": "3",
          "entriesInLogin": "3"
        },
        {
          "id": "849348",
          "name": "제품&매뉴얼",
          "parent": "",
          "label": "제품&매뉴얼",
          "entries": "29",
          "entriesInLogin": "29"
        },
        {
          "id": "907750",
          "name": "국&탕&찌개",
          "parent": "959146",
          "label": "요리/국&탕&찌개",
          "entries": "4",
          "entriesInLogin": "4"
        },
        {
          "id": "836349",
          "name": "PPSSPP 치트",
          "parent": "905586",
          "label": "게임/PPSSPP 치트",
          "entries": "2",
          "entriesInLogin": "2"
        },
        {
          "id": "826472",
          "name": "Linux",
          "parent": "860467",
          "label": "개발/Linux",
          "entries": "2",
          "entriesInLogin": "2"
        },
        {
          "id": "905586",
          "name": "게임",
          "parent": "",
          "label": "게임",
          "entries": "14",
          "entriesInLogin": "14"
        },
        {
          "id": "825239",
          "name": "반찬",
          "parent": "959146",
          "label": "요리/반찬",
          "entries": "6",
          "entriesInLogin": "6"
        },
        {
          "id": "959146",
          "name": "요리",
          "parent": "",
          "label": "요리",
          "entries": "11",
          "entriesInLogin": "11"
        },
        {
          "id": "860467",
          "name": "개발",
          "parent": "",
          "label": "개발",
          "entries": "8",
          "entriesInLogin": "8"
        },
        {
          "id": "666977",
          "name": "정리",
          "parent": "",
          "label": "정리",
          "entries": "0",
          "entriesInLogin": "42"
        }
      ]
    }
  }
}
```
<br /><br />
