# 원티드 프리온보딩 프론트엔드 코스

## 토글 기능

구현 방법

1. isDefault라는 state를 한 개 생성하고 처음엔 '기본'이 선택 되어있으므로 true값으로 초기화 했습니다.
2. '기본' 과 '상세' 각 버튼에 onClickDefault와 onClickDetail 이라는 이벤트 핸들러를 클릭 이벤트에 대응하도록 했습니다.
3. 각 이벤트 핸들러의 역할은 다음과 같습니다.

- onClickDefault : setIsDefault를 호출하여 isDefault 상태를 true로 변경시킨다
- onClickDetail : setIsDefault를 호출하여 isDefault 상태를 false로 변경시킨다

4. 클릭시 현재 선택된 항목을 알 수 있도록 isDefault 상태에 따라 각 버튼의 class 어트리뷰트에 폰트 색상 스타일 요소를 변경해 주었습니다.
5. 추가적으로 슬라이드 애니메이션은 '기본' 버튼 자식요소로 div태그를 만들어 position: absolute를 설정하고 transform: transitionX(요소의 크기)와 transition을 설정하여 구현했습니다.

이렇게 구현한 이유

- 토글은 총 두가지의 선택지 밖에 없으므로 한 개의 상태만으로도 두 값을 표현할 수 있기때문에 isDefault라는 상태를 생성했습니다.
- 이벤트 핸들러를 두 개로 만든 이유는 가독성을 위해서 입니다. 한 개의 핸들러로 e.target을 추적하여 상태를 변경시킬 수도 있지만 로직이 복잡해지기 때문에 두 개의 핸들러로 구현하여 작은 함수를 유지하고 함수의 의미를 명확히 하고 싶었습니다.

구현하면서 어려웠던 점

- 슬라이드 애니메이션을 구현하는 것이 어려웠습니다. 버튼 밑에 깔리는 div태그를 만드는 것까지는 생각이 들었으나 z-index가 생각하던대로 동작하지 않아 많은 시간이 들었습니다. 가장 밑에 깔려야할 div 태그에 z-index : 0 을 주었지만 계속 버튼위로 올라오는 버그가 있어서 z-index : -10 으로 설정했더니 해결되었습니다. z-index에 대해 더 공부해야 할 것 같습니다.

## 탭 기능

구현 방법

1. tabMenus라는 state를 한 개 생성하고 예시로 제시된 데이터들을 {id : 1, text : "감자", isSelected: true} 형식으로 객체들이 담긴 배열로 초기화 했습니다.
2. 각 탭 요소를 li태그로 표현했고 위에서 초기화한 tabMenus와 map함수를 활용해 내용물을 채워주었습니다.
3. 그리고 탭 메뉴에 해당하는 li태그들에 changeTab이라는 클릭 이벤트에 대응하는 공통 이벤트 핸들러를 등록해주고, 매개변수로 id값이 전달 될 수 있도록 했습니다.
4. changeTab의 역할은 클릭된 메뉴의 id 값을 통해 현재 클릭된 메뉴를 판별하여 isSelected 값을 새로 갱신한다음 내부적으로 setTabList를 호출하여 상태를 업데이트 합니다.
5. 추가적으로 슬라이드 애니메이션을 위해 getActiveTab, barMove 함수를 생성했고, 움직이는 바의 DOM($bar)을 가져오기 위해 ref를 사용했습니다. 각 역할은 다음과 같습니다.

- getActiveTab : tabMenus 상태 배열에서 filter 함수를 통해 isSelected가 true 항목의 id값을 리턴합니다.
- barMove : getActiveTab에서 현재 선택된 id값으로 transform: translateX(값)에 들어갈 움직일 값을 계산하여 ref로 참조한 DOM의 스타일을 변경합니다.
- $bar : 현재 선택된 탭을 UI적으로 알게해주는 하단에 위치한 색상이 있는 슬라이더 입니다.

이렇게 구현한 이유

- 각 탭의 상태를 tabMenus라는 객체들이 담긴 배열로 표현한 이유는 map 함수를 활용하여 보다 JSX를 간결하게 하고 싶었습니다.
- 각 객체에 id값을 넣어줌으로써 tabMenus 한 개의 상태로 changeTab, getActiveTab을 모두 구현 할 수 있었습니다.

구현하면서 어려웠던 점

- 토글 기능과 구현 상의 유사점이 많아서 크게 어렵진 않았습니다. 토글의 상태가 불린값 하나 였다면 탭에선 불린값을 포함하는 배열로 바뀌었단 점이고, 반면 차이점은 토글에선 이벤트 핸들러를 버튼 마다 다른 함수를 등록했지만, 탭에선 하나의 함수로 처리하는 대신 id 값으로 탭 변경을 처리했단 점입니다.
- 슬라이드 애니메이션을 구현하는 데 어려움이 있었습니다. tailwindCSS의 제공되는 클래스를 사용하여 transform: translateX를 처리하려 했지만 translateX(200%)를 tailwindCSS로 구현 할 수가 없었어서, ref를 활용하여 직접 style을 변경해주었습니다.

## 슬라이더 기능

구현 방법

1. input 태그의 type="range"를 활용하여 슬라이더를 구현했습니다. 또한 컴포넌트의 현재 수치값을 알 수 있도록 input태그의 value 어트리뷰트에 percentage 상태를 바인딩 했습니다.
2. input 태그의 onChange에 onChangePercentage 이벤트 핸들러를 등록하여 value값에 변화가 있을 시 percentage 상태가 변경 될 수 있도록 했습니다.
3. 미리 정의된 수치들을 buttons 배열에 {id: 1, percentage: 75} 형식으로 초기화했고, 이를 토대로 JSX 안에 누르면 값이 변하는 버튼을 구현했습니다.
4. 각 버튼에 clickPercentageButton이라는 클릭 이벤트 핸들러를 등록하여 각 버튼들의 id 값을 넘겨주고 id가 일치하는 객체의 percentage 값으로 setPercentage 함수를 호출하여 percentage 상태를 변경 시켰습니다.

이렇게 구현한 이유

- 수치 값은 서버로 전송되거나, 클라이언트의 상태에 저장되어 처리되야 하므로 input 태그를 활용하여 value의 의미를 명확히 했습니다.
- buttons 배열에 percentage 수치 값들을 담은 객체들로 초기화한 이유는 JSX에서 하드코딩을 방지하고 싶었습니다.
- input 태그에 value 어트리뷰트에 percentage 상태를 바인딩하고 onChange에 onChangePercentage 이벤트핸들러를 바인딩 한 이유는 리액트에서 폼 데이터 형식에 권장하는 방식인 제어 컴포넌트를 활용하기 위함입니다.

구현하면서 어려웠던 점

- 부가 구현 요소 중에 하나였던 미려한 픽셀 매칭이 어려웠습니다. 기존 Input의 스타일중 슬라이더 버튼을 제외한 다른 요소들은 할용하지 않았기 때문에, 새롭게 슬라이더 바 2개를 만들고 배치하는 것이 까다로웠습니다.

## 인풋 기능

구현 방법

1. 데이터 전송을 위한 formValue, 패스워드 on/off 기능을 위한 isPasswordVisible, 밸리데이션을 위한 formValueisOk 라는 상태 변수를 생성했습니다.
2. 두 종류 input(email, password)를 onChangeInput에서 한 번에 처리하되 e.target.id로 분류하여 formValue를 업데이트 했습니다.
3. 동시에 e.target.id가 email이면 emailValidation 함수가 로직을 수행합니다.
4. emailValidation은 정규식으로 테스트를 수행했습니다.
5. 패스워드 on/off 기능은 input type에 변화를 주어 구현했습니다.
6. 에러 메세지도 formValueIsOk.email 을 참조하고 onBlur를 활용하여 이메일 검증 실패 시 보여주었습니다.

이렇게 구현한 이유

- form 데이터는 주로 서버에 제출되는 형식이므로 formValue 객체 안에서 값들을 관리했습니다. 그리고 useState로 여러 개의 상태를 만드는 것보다 확장성, 유지보수성 측면에서 더 낫다고 생각했습니다.
- 서버 API 호출 방지 측면에서 formValueIsOk를 따로 상태로 관리했습니다. 이메일 검증 수행 후 formValueIsOk.email 이 false 이면 클라이언트에서 API 호출을 원천적으로 막을 수 있습니다. 또한 위의 이유와 마찬가지고 확장성, 유지보수성을 고려하여 패스워드 검증도 수행할 수 있기에 emailIsOk 라는 상태 대신 formValueIsOk라는 상태를 두었습니다.

구현하면서 어려웠던 점

- email 검증하는 부분에서 정규식 작성하는 것이 어려웠습니다. 그래서 구글 검색을 통해 도움을 받았습니다.

## 드롭다운 기능

구현 방법

1. 현재 선택된 항목을 알 수 있는 currentKeyword, 드롭다운을 열고 닫기 위한 isDropDownOpen, 검색창을 위한 searchWord, 키워드 필터 기능을 위한 filteredList를 상태로 만들었습니다.
2. toggleDropdown 함수에서 isDropDownOpen 상태에 따라 openDropdown, closeDropdown 함수를 호출합니다. 각 함수에서는 display: none 을 대체하는 hidden 속성으로 구현했습니다.
3. 선택창은 각 항목들에 selectKeyword 클릭 이벤트 핸들러를 구현하여 버튼 클릭시 currentKeword가 업데이트 되고 드롭다운창을 닫습니다.
4. 키워드 필터 기능 구현은 input 태그에 keywordFilter라는 change 이벤트에 대응하는 핸들러를 구현하여 JS 내장함수인 toLowerCase와 includes를 활용하여 필터링된 리스트가 렌더링 되도록 구현했습니다.

이렇게 구현한 이유

- 코드의 가독성을 높이기 위해 toggleDropdown 함수로 의미를 추상화하여 함수 내부에서 closeDropdown, openDropdown를 호출하도록 했습니다.
- 검색할 항목들이 대문자, 숫자, . 문자들로 이루어진 점을 고려해 toLowerCase함수로 모두 소문자로 바꾸어 주었습니다.
- data는 외부 API에서 주입될 수 있는 데이터이기에 컴포넌트 외부에 정의했습니다.

구현하면서 어려웠던 점

- 앞서 구현했던 toggle, tab, input 를 종합한 예제인 것 같아서 크게 어렵진 않았습니다. 다만 키워드 필터 기능을 구현 할 때 필터링된 리스트를 JSX로 렌더링 하는 부분에서 기존 data의 영속성과 필터링된 리스트의 분리 작업에서 조금 고민했습니다.
