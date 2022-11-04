const sosJobDescription = "Accomplish a broad range of responsibilities including; accurate and timely data entry, understanding, and selecting inventory and services in key databases, communicating with referral sources, and appropriately utilizing technology to notate patient information/communication. Have a thorough understanding the entire front-end process to ensure successful service for our patients. Works in a fast-paced environment answering inbound calls and making outbound calls. Maybe responsible for obtaining, analyze, and verify the accuracy of information received from referrals, create orders, and or schedule the patient to receive equipment as ordered by their doctor. Educate Patients of their financial responsibility when applicable. Responsible for ensuring customers receive PAP equipment by scheduling an appointment for the customer to come in to pick up equipment and receive proper instruction on how to best use the equipment. Responsible for encouraging client compliance with PAP equipment and program."

const soundOxygen = () => {
    $('<p>').attr('id', 'sO2JobDetails').text($(sosJobDescription)).appendTo($('#soundO2'))
}
//carousel images html page
let currentImgIndex = 0

//image array for carousel
const carouselImages = [
    {
        image: "images/34513_1505315110196_6371760_n.jpg",
        alt: "motorcyles on street"
    },
    {
        image: "images/44691_1564343585871_191915_n.jpg",
        alt: "blue motorcycle"
    }
]

const numOfImages = carouselImages.length - 1

const workExperience = {
    soundO2: [
        {
            title: "Patient Care Coordinator",
            summary: "description",
        }
    ]

    ,
    fircrest: [
        {
            title: "Attendant Counselor 3",
            summary: "description",
        },
        {
            title: "Attendant Counselor 2",
            summary: "description",
        },
        {
            title: "Attendant Counselor 1",
            summary: "description",
        }
    ]

    ,
    billies: [

    ]

    ,
    specialty: [

    ]
}

$(() => {
    // $('#workExpHeader').on('click', function () {
    //     $('.third > div.content').toggleClass("show");
    // })
    for (let i = 0; i < carouselImages.length; i++) {
        $('<img>').attr('src', carouselImages[i].image)
            .attr('alt', carouselImages[i].alt)
            .appendTo($('.images'))
    }
    //carousel pic buttons
    $('.next').on('click', () => {
        $('.images').children().eq(currentImgIndex)
            .css('display', 'none')
        if (currentImgIndex < numOfImages) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }
        $('.images').children().eq(currentImgIndex)
            .css('display', 'block')
    })

    $('.previous').on('click', () => {
        $('.images').children().eq(currentImgIndex)
            .css('display', 'none')
        if (currentImgIndex > 0) {
            currentImgIndex--
        } else {
            currentImgIndex = numOfImages
        }
        $('.images').children().eq(currentImgIndex)
            .css('display', 'block')
    })

    $(".modal-buttons.open").on('click', function () {
        console.log($(this).attr("data-modal"))
        const wex = workExperience[$(this).attr("data-modal")]
        console.log(wex)
        $("#modal-textbox").empty()
            for (let i=0; i < wex.length; i++){
                const $title = $('<h3>').text(wex[i].title);
                const $summary = $('<p>').text(wex[i].summary);
                $("#modal-textbox").append($title).append($summary);

        }
        $('#modal-overlay').css("display", "block")
    })

    $(".modal-buttons.close").on('click', () => {
        $('#modal-overlay').css("display", "none")
    })

})