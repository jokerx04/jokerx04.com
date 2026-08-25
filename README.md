# jokerx04.com


## CDN 갱신

```html
<!-- https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@latest/{파일경로 및 파일명} -->
<script src="https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@latest/js/common.js"></script>

<!-- https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@SHA/{파일경로 및 파일명} -->
<script src="https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@63c6453/js/common.js"></script>

<!-- https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@Tag/{파일경로 및 파일명} -->
<script src="https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@v1.0.0/js/common.js"></script>
```
<br /><br />


## 페이지 임베드

```html
<!-- https://rawcdn.githack.com/jokerx04/{레파지토리}/main/{파일경로 및 파일명} -->
<iframe src="https://rawcdn.githack.com/jokerx04/jokerx04.com/main/page/%ED%85%8C%ED%8A%B8%EB%A6%AC%EC%8A%A4.html"
	style="width: 100%; height: 100vh; min-height: 800px; border: none; display: block;"
	allow="autoplay; fullscreen">
</iframe>

<!-- https://rawcdn.githack.com/jokerx04/{레파지토리}/@SHA/{파일경로 및 파일명} -->
<iframe src="https://rawcdn.githack.com/jokerx04/jokerx04.com/ab55e2a/page/%ED%85%8C%ED%8A%B8%EB%A6%AC%EC%8A%A4.html"
	style="width: 100%; height: 100vh; min-height: 800px; border: none; display: block;"
	allow="autoplay; fullscreen">
</iframe>

<!-- https://rawcdn.githack.com/jokerx04/{레파지토리}/@Tag/{파일경로 및 파일명} -->
<iframe src="https://rawcdn.githack.com/jokerx04/jokerx04.com/v1.0.0/page/%ED%85%8C%ED%8A%B8%EB%A6%AC%EC%8A%A4.html"
	style="width: 100%; height: 100vh; min-height: 800px; border: none; display: block;"
	allow="autoplay; fullscreen">
</iframe>
```
<br /><br />


## INSPINIA Preview

- v4 : https://webapplayers.com/inspinia/
- v3 : http://webapplayers.com/inspinia_admin-v2.9.4/

<br /><br />


## Unify Preview

- v3 : https://htmlstream.com/unify/index.html
- v2.6.3 : https://htmlstream.com/preview/unify-v2.6.3/

<br /><br />


my-react-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # [핵심] GitHub Actions CI/CD 파이프라인 정의 파일
├── public/
│   ├── favicon.ico             # 빌드 없이 그대로 웹 루트로 복사되는 에셋
│   └── 404.html                # SPA 서브 경로 새로고침 시 404 방지용 리다이렉트
├── src/
│   ├── assets/                 # 번들링 대상 이미지, 스타일, 폰트 등
│   ├── components/             # 재사용 가능한 UI 컴포넌트
│   ├── pages/                  # 화면 라우팅 단위 컴포넌트
│   ├── App.jsx                 # 루트 컴포넌트
│   └── main.jsx                # React DOM 진입점
├── .gitignore                  # dist, node_modules 등 빌드/의존성 폴더 제외
├── index.html                  # HTML 템플릿 진입점 (Vite 기준)
├── package.json                # 프로젝트 의존성 및 빌드 스크립트 정의
├── package-lock.json           # 의존성 잠금 파일 (Actions의 npm ci 실행에 필수)
└── vite.config.js              # 번들러 설정 및 Pages base 경로 지정

