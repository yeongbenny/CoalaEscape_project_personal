room = game.createRoom("room", "main_room.jpg") // 방 생성
room2 = game.createRoom("room2","garden.jpg") //창문 클릭 시 정원
room3 = game.createRoom("room3","friday_first.jpg") //살인마 1번 방
room4 = game.createRoom("room4","friday_second.jpg") //살인마 2번방
room5 = game.createRoom("room5","black.png") //마지막 퀴즈 방

room.table = room.createObject("table", "table.png") //테이블 생성
room.table.setWidth(350)
room.locateObject(room.table, 900, 600)

room.loft = room.createObject("loft", "loft.png") // 옥탑밥 생성
room.loft.setWidth(160)
room.locateObject(room.loft, 900, 47)
room.loft.lock() // 옥탑방 잠그기

room.lamp = room.createObject("lamp", "lamp.png") //전등 생성
room.lamp.setWidth(230)
room.locateObject(room.lamp, 720, 130)


room.window = room.createObject("window", "window.png") //창문 생성
room.window.setWidth(300)
room.locateObject(room.window, 450, 250)

room.computer = room.createObject("computer", "computer.png") //컴퓨터 생성
//room.computer.setWidth(200)
room.locateObject(room.computer, 900, 470)


room.usb = room.createObject("usb", "usb.png") //usb 생성
room.usb.setWidth(40)
room.locateObject(room.usb, 350, 630)
room.usb.hide()

room.usb.onClick = function () { //usb클릭 시 획득
    room.usb.pick()
}

room.axe = room.createObject("axe","axe.png") //1번 방 도끼 생성
room.axe.setWidth(210)
room.locateObject(room.axe, 1050, 200)

room.box = room.createObject("box", "box.png") //상자 생성
room.box.setWidth(250)
room.locateObject(room.box, 600, 600)
room.box.lock()

room.trash = room.createObject("trash", "trash.png") //쓰레기통 생성
room.locateObject(room.trash, 300, 600)
room.trash.setWidth(80)

room.telescope = room.createObject("telescope", "telescope.png") //망원경 생성
room.telescope.setWidth(100)
room.locateObject(room.telescope, 570, 670)
room.telescope.hide()
room2.telescope = room2.createObject("telescope","telescope.png") // room2용 망원경
room2.telescope.hide()

room.telescope.onClick = function () { //망원경 줍기
    room2.telescope.pick()
    room.telescope.hide()
    printMessage("망원경을 주웠다! usb대신 사용해보자")
}

room.axe.onClick = function(){ //도끼 클릭 시
    printMessage("섬뜩하다...피가 묻어있다")
    playSound("drop.wav")
    }


room4.book = room4.createObject("book", "book.png") // 살인마 2번 방 책 생성
room4.locateObject(room4.book,920,490)
room4.book.setWidth(100)



/*
room.crumblepaper = room.createObject("crumblepaper", "crumblepaper.png") //휴지조각 생성
room.crumblepaper.setWidth(40)
room.locateObject(room.crumblepaper,330,630)
room.crumblepaper.hide()
*/

room2.arrow = room2.createObject("arrow", "arrow.png") //돌아가기 화살표 생성
room2.arrow.setWidth(100)
room2.locateObject(room2.arrow, 700, 650)

room2.sign = room2.createObject("sign", "sign.png") //주소 표지판 생성
room2.sign.setWidth(230)
room2.locateObject(room2.sign, 1050, 510)

room2.jason = room2.createObject("jason","jason.png") // 정원 살인마 생성
room2.locateObject(room2.jason,300,500)

room2.jason_face = room2.createObject("jason_face","jason_face.png") //얼굴 클로즈업
room2.jason_face.setWidth(800)
room2.jason_face.hide()

room2.jason.onClick = function(){
    room2.jason_face.show()
    room2.jason.hide()
    playSound("doorbell.wav") //초인종 소리 울림
    printMessage("으악 뭐야!!!")
    room2.jason_face.onClick = function(){
        room2.jason_face.hide()
        printMessage("싸이코 살인마다!!! 얼른 탈출해야겠어")
        }
   
    }

room3.meat= room3.createObject("meat","meat.png") //살인마 1번방 고기 생성
room3.meat.setWidth(100)
room3.locateObject(room3.meat,1050,310)
room3.meat.hide()

room3.telephone = room3.createObject("telephone","telephone.png") //살인마 1번방 전화기 생성
room3.telephone.setWidth(120)
room3.locateObject(room3.telephone,355,450)
room3.telephone.lock() //처음에는 잠겨있는 상태로 시작

room3.wire = room3.createObject("wire","wire.png") // 1번 방 전선 생성
room3.wire.setWidth(150)
room3.locateObject(room3.wire,400,530)
room3.wire.hide() //숨겨놓았다

room3.socket = room3.createObject("socket","socket.png") //1번 방 소켓 생성
room3.socket.setWidth(50)
room3.locateObject(room3.socket,540,485)

room3.exit = room3.createObject("exit","exit.png") // 마지막 탈출구
room3.locateObject(room3.exit,638,300)
room3.exit.hide() // 숨겨놓았다

room4.telephone = room4.createObject("telephone","telephone.png") //살인마 2번방 전화기 생성
room4.telephone.setWidth(120)
room4.locateObject(room4.telephone,1030,340)


room.loft.onClick = function () { // 옥탑방 클릭하면 계단이 나오고 살인마 방으로 이동
    if (room.loft.isClosed()) {
        room.loft.open()
    }
    else if (room.loft.isOpened()) {
        game.move(room3)
        playSound("open.wav") // 문 열리는 소리 발생
        printMessage("살인마의 비밀공간인가..?")

    }else if (room.loft.isLocked()) { //옥탑방 비밀번호 체크
        printMessage("집의 주소는?")
        showKeypad("number", "8939", function () {
            room.loft.unlock()
            printMessage("옥탑방이 열렸다! 열어보자!")
        })
    }
}

room.loft.onOpen = function () { //계단이 열리는 코드
    room.loft.setSprite("stair.png")
}


room.window.onClick = function () { //창문클릭 시 방2번 출력
    game.move(room2)
}

room2.arrow.onClick = function () { //돌아가기 화살표 클릭
    game.move(room)
}


room.computer.onClick = function () { //컴퓨터 클릭 시
   
    if (game.getHandItem() == room.usb) {
        showImageViewer("clock.png", "");
        printMessage("시계 어플리케이션이다...")
    } else {
        printMessage("아무 파일도 없다...")
    }
}

room.trash.onClick = function () { //쓰레기통 클릭 시
    showImageViewer("usb.png", "");
    room.usb.show()
    printMessage("USB가 들어있다!")

}

room.box.onClick = function () { // 박스 문제 해결
    printMessage("현재 시간")
    showKeypad("telephone", "100840", function () {
        room.box.unlock()
        room.telescope.show()
        printMessage("박스가 열렸다!!")
    })
}

room3.telephone.onClick = function(){ //살인마 1번 방 전화기 클릭 시
    room3.meat.show()
    if(room3.telephone.isLocked()){
        printMessage("전화기가 먹통이다...")
        playSound("drop.wav")
        }
    else{
        showKeypad("telephone","127001",function(){
            playSound("door.wav") //문 두드리는 소리 발생
            //playSound("door.wav")
            printMessage("전선이 나왔다!!")
            room3.wire.show()
            })
        }
    }

room3.wire.move = true // 움직임 플래그 변수
room3.wire.onDrag = function(direction){ //전선을 옆으로 미는 함수
    if(direction == "Right" && room3.wire.move){
        room3.wire.moveX(57)
        room3.wire.move = false
        printMessage("비상구가 열렸다!!!서두르자")
        playSound("door.wav")
        room3.exit.show()
        }
    else{
        printMessage("옆의 콘센트에 밀어서 꽂아야 할 것 같다.")
        }
    }

room3.socket.onClick = function(){
    printMessage("전선이 필요한데..?")
    }

room4.telephone.onClick = function(){ //살인마 2번 방 전화기 클릭
    printMessage("옆 방의 전화기에서 벨소리가 들린다!!")
    playSound("bell.wav") //착신아리 효과음
    room3.telephone.unlock()
    }


room4.book.onClick = function () { //책 클릭 시
    printMessage("이게 뭐지?")
    showImageViewer("postit.png", "hint.txt");

}


room2.sign.onClick = function () { // 표지판 클릭
    if (game.getHandItem() == room2.telescope) {
        showImageViewer("sign2.png", "");
        printMessage("주소가 잘 보인다...!!")
    } else {
        printMessage("주소 같은데 멀어서 잘 보이지 않는다...")
    }

}

room3.meat.onClick = function(){ //살인마 1번방 고기 클릭 시 2번 방 출력
    game.move(room4)
    playSound("open.wav")
    printMessage("스산하다...")
    }

room3.exit.onClick = function(){
    game.move(room5)
    printMessage("마지막 관문인가!")
    }

room4.arrow = room4.createObject("arrow", "arrow.png") //돌아가기 화살표 생성
room4.arrow.setWidth(80)
room4.locateObject(room4.arrow, 700, 650)

room4.arrow.onClick = function () { //돌아가기 화살표 클릭
    game.move(room3)
}

//마지막 방 코드들
room5.question = room5.createObject("question","question.png")

room5.axe = room5.createObject("axe","axe.png")
room5.axe11 = room5.createObject("axe11","axe11.png")
room5.axe22 = room5.createObject("axe22","axe22.png")
room5.axe33 = room5.createObject("axe33","axe33.png")
room5.axe44 = room5.createObject("axe44","axe44.png")
room5.final_jason = room5.createObject("final_jason","final_jason.png")
room5.escape = room5.createObject("escape","escape.png")

room5.axe.setWidth(300)
room5.axe11.setWidth(300)
room5.axe22.setWidth(300)
room5.axe33.setWidth(300)
room5.axe44.setWidth(300)

room5.locateObject(room5.question,500,100)
room5.locateObject(room5.axe11,250,280)
room5.locateObject(room5.axe22,500,280)
room5.locateObject(room5.axe,750,280)
room5.locateObject(room5.axe33,350,500)
room5.locateObject(room5.axe44,600,500)
room5.locateObject(room5.final_jason,1000,350)
room5.final_jason.hide()

room5.locateObject(room5.escape,950,600)
room5.escape.hide()

room5.escape.onClick = function(){
    game.clear()
    }

room5.axe.onClick = function(){
    printMessage("정답이다! 탈출하자! (틀리면 어떻게될까?)")
    room5.escape.show()
    }

room5.axe11.onClick = function(){
    printMessage("으악!! 칼에 찔렸다")
    playSound("knife.wav")
    room5.final_jason.show()
    }
room5.axe22.onClick = function(){
    printMessage("으악!! 칼에 찔렸다")
    playSound("knife.wav")
    room5.final_jason.show()
    }
room5.axe33.onClick = function(){
    printMessage("으악!! 칼에 찔렸다")
    playSound("knife.wav")
    room5.final_jason.show()
    }
room5.axe44.onClick = function(){
    printMessage("으악!! 칼에 찔렸다")
    playSound("knife.wav")
    room5.final_jason.show()
    }

roomLight = true
room.setRoomLight(0.30)
room3.setRoomLight(0.7)
room4.setRoomLight(0.7)

room.lamp.onClick = function () {
        room.setRoomLight(0.75)
        printMessage("여긴 어디지..?")
}

game.start(room) // 게임시작


printMessage("(소리를 꼭 켜고 플레이해주세요!)")