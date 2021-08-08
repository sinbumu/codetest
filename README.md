설치, 실행 방법

1. npm i
2. npm run start
 
    or
    
    npm run start:dev

    <domain or ip:port>/api  -- swagger page
    ex : http://localhost:3000/api





■ 배경:
병원 의료 정보 event를 구독하면서 이상 징후를 보이는 환자가 있을 경우 alert를 생성하고 해당 alert이 발생한 환자를 모니터링하기 위한 API Server가 필요합니다.



■ 용어:

Patient := 환자
VitalSign := 활력 징후. type에는 TEMP(체온), PULSE(맥박)이 있으며 각각 다른 시점에 입력됨.
Alert := 활력 징후 경보, 해당 VitalSign type에 대해서 AlertCriteria를 벗어날 때마다 발생, e. g, 매시에 체온이 측정된다면, 1시와 2시에 체온이 정상범위를 벗어났을 때, 각각 2개의 Alert 생성
AlertCriteria := Alert을 발생시키는 기준. 현 시점에서 아래 3가지이며 이후에 추가 가능하도록 설계 필요. 모든 환자에 대해서 일괄 적용.
- TEMP < 34
- TEMP >= 38
- PULSE > 140  


■ 요구사항:

API Server
특정 기간 내 Alert이 발생한 Patient들 조회, 각 Patient는 해당 기간 내 발생한 Alert의 리스트를 가지고 있어야 함
Patient 생성
Alert 생성
AlertCriteria 생성
VitalSign 생성
각 API에 대한 test 코드 작성
DB 종류에 제한은 없으며, 타당한 이유가 있을 시 여러 DB를 사용해도 됨.
RESTful API, GraphQL 중 하나로 구현
orm 혹은 repository pattern 혹은 query/command pattern 사용
