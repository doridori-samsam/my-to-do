<h1>💙My To do</h1>
📌 2022.08 - 2022.-09
<br>
📌 My to do 배포 URL : https://web-to-do-8b4d0.web.app/
<br>
<br>
<img src="https://media.discordapp.net/attachments/698529846565011531/1034801128283582575/unknown.png">

<h2>📄개요</h2>

```
My to do는 원티드 프리온보딩 챌린지에서 로컬서버를 기반으로 한 투두리스트 웹을 firebase로 재구현한 웹입니다.

간단한 이메일, 비밀번호 작성으로 회원가입을 할 수 있으며, 가입한 아이디로 로그인을 할 수 있습니다.

사용자는 오늘 날짜와 자신의 투두리스트를 확인 할 수 있으며 새로운 투두리스트를 작성하고 수정, 삭제할 수 있습니다

```

</br>
<br>
<h2>⚙기술 및 개발환경</h2>

#### [기술]

<div align=left>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/styled components-%23DB7893?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/mui-%23007FFF?style=for-the-badge&logo=mui&logoColor=white">
</div>
</br>
<div>📌 BackEnd : <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black"></div>
<br/>
📌 Version :

```
react : "18.2.0"
react-router-dom : "6.3.0"
firebase: "9.9.3"
styled-components: "5.3.5"
@emotion/react: "11.10.0"
@emotion/styled: "11.10.0"
@mui/icons-material: "5.10.2"
@mui/material: "5.10.2"
@testing-library/jest-dom: "5.16.5"
@testing-library/react: "13.3.0"
@testing-library/user-event: "13.5.0"
```

<br>
<h2>🎨구현 기능</h2>

- 🔐 계정

  - 로그인 / 로그아웃
  - 회원가입

- 🏠 홈

  - 투두리스트 목록
  - 새 투두리스트 추가
  - 햄버거 메뉴

- 📄 투두리스트
  - 투두리스트 삭제
  - 투두리스트 수정

</br>
<br>
<h2>✨코드 포인트</h2>
#### ✔ styled-components와 mui를 활용한 반응형 웹디자인
#### ✔ context API를 사용한 사용자 로그인/로그아웃 상태 관리
#### ✔ context, useReducer훅을 포함한 custom hooks로 회원가입/로그인/로그아웃 기능 및 firebase 훅 사용
#### ✔ env 파일에 환경변수 설정으로 firebase api 관련 설정 보안
