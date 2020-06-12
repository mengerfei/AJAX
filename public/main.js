let getCSS = document.querySelector("#getCSS");
let getJS = document.querySelector("#getJS");
let getHTML = document.querySelector("#getHTML");
let getXML = document.querySelector("#getXML");
let getJSON = document.querySelector("#getJSON");
let getPage = document.querySelector("#getPage");
let n = 1

// 加载HTML
getHTML.onclick = () => {
    // 创建
    const request = new XMLHttpRequest()
    // 调用
    request.open('GET', '/3.html')
    // 监听
    request.onload = () => {
        // console.log('yes')
        // console.log(request.response)
        // 创建div标签
        const div = document.createElement('div')
        // 填写div内容
        div.innerHTML = request.response
        // 插到身体里面
        document.body.appendChild(div)

    }
    request.onerror = () => {
        console.log('no')
    }
    request.send()
}


// 加载分页--第二页
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}`)

    request.onreadystatechange = () => {
        if ((request.readyState === 4) && (request.status >= 200 && request.status < 300)) {
            const array = JSON.parse(request.response)
            let dataList = document.querySelector("#dataList");
            array.forEach(item => {
                let li = document.createElement("li");
                li.textContent = item.id;
                dataList.appendChild(li);
            });
            n += 1
        }

    };
    request.send()
}


// 加载CSS
getCSS.onclick = () => {

    // 创建HttpRequest对象（全称是XMLHttpRequest）
    const request = new XMLHttpRequest()
    // 调用对象的open方法
    request.open('GET', '/style.css');

    // 监听对象的onload & onerror事件
    request.onload = () => {
        // console.log('request.response')
        // console.log(request.response)

        // 创建style标签
        const style = document.createElement('style')
        // 填写style内容
        style.innerHTML = request.response
        // 插到头里面
        document.head.appendChild(style)
        // console.log('成功了！')
    }
    request.onerror = () => {
        console.log('失败了！')
    }

    // 调用对象的send方法
    request.send()
}


// 加载JS
getJS.onclick = () => {
    // 创建
    const request = new XMLHttpRequest()
    // 调用
    request.open('GET', '/2.js')
    // 监听readystate改写
    request.onreadystatechange = () => {
        //    下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        //console.log(request.readyState)
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {

                // 创建script标签
                const script = document.createElement('script')
                // 填写script内容
                script.innerHTML = request.response
                // 插到身体里
                document.body.appendChild(script)

            } else {
                alert('加载JS失败！')
            }

        }
    }
    request.send()
}



// 加载XML
getXML.onclick = () => {
    // 创建
    const request = new XMLHttpRequest()
    // 调用
    request.open('GET', '/5.xml')
    // 监听
    request.onreadystatechange = () => {
        if ((request.readyState === 4) && (request.status >= 200 && request.status < 300)) {

            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())

        }

    }
    request.send()
}




// 加载JSON
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/6.json')

    request.onreadystatechange = () => {
        if ((request.readyState === 4) && (request.status >= 200 && request.status < 300)) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}




