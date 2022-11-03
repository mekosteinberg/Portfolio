const sosJobDescription = "Accomplish a broad range of responsibilities including; accurate and timely data entry, understanding, and selecting inventory and services in key databases, communicating with referral sources, and appropriately utilizing technology to notate patient information/communication. Have a thorough understanding the entire front-end process to ensure successful service for our patients. Works in a fast-paced environment answering inbound calls and making outbound calls. Maybe responsible for obtaining, analyze, and verify the accuracy of information received from referrals, create orders, and or schedule the patient to receive equipment as ordered by their doctor. Educate Patients of their financial responsibility when applicable. Responsible for ensuring customers receive PAP equipment by scheduling an appointment for the customer to come in to pick up equipment and receive proper instruction on how to best use the equipment. Responsible for encouraging client compliance with PAP equipment and program."

const soundOxygen = () => {
    $('<p>').attr('id', 'sO2JobDetails').text($(sosJobDescription)).appendTo($('#soundO2'))
}


$(() => {
    $('#workExpHeader').on('click', function () {
        $('.third > div.content').toggleClass("show");
    })

    $('#so2Header').on('click', function () {
        $('.third > div.content').toggleClass("show");
    })

    $('#fircrestHeader').on('click', function () {
        $('.third > div.content').toggleClass("show");
    })

    $('#pumpwellHeader').on('click', function () {
        $('.third > div.content').toggleClass("show");
    })




    //$('#soundO2').on('click', soundOxygen);

    // $('article').on('click', () {
    //     $('small').toggleClass('show-description'); })

});