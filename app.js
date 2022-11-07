//carousel images html page
let currentImgIndex = 0

//image array for carousel
const carouselImages = [
    {
        image: "images/IMG_20190418_201605_796.jpg",
        alt: "Viewpoint from Mt Pilchuck"
    },
    {
        image: "images/12183871_10207879322718330_7023310334001093862_o.jpg",
        alt: "narrow raised path on fall hike"
    },
    {
        image: "images/FB_IMG_1557153824023.jpg",
        alt: "Meko enjoying the view at Devils Dome"
    },
    {
        image: "images/20210821_121054.jpg",
        alt: "kids camping chairs"
    },
    {
        image: "images/FB_IMG_1573515157316.jpg",
        alt: "Ron Swanson Scotch Flavored Cupcakes"
    },
    {
        image: "images/20210821_130412.jpg",
        alt: "Orcas Island view from Mt Constitution"
    },
    {
        image: "images/52087_1606952931078_3849699_o.jpg",
        alt: "rickety bridge over river"
    },
    {
        image: "images/599713_4205011360915_519458590_n.jpg",
        alt: "2 tents glacier camping"
    },
    {
        image: "images/FB_IMG_1602463825464.jpg",
        alt: "2 people learning to kayak in fall"
    },
    {
        image: "images/207007_1042813547946_3930_n.jpg",
        alt: "red R6 sport bike"
    },
    {
        image: "images/IMAG0014.jpg",
        alt: "close up quilting pattern king size blanket"
    },
    {
        image: "images/17038747_714393505521_4619214142886511370_o.jpg",
        alt: "silly cross country skiing"
    },
    {
        image: "images/Screenshot_20210510-082536_Facebook.jpg",
        alt: "gray teal and pink dandelion quilt"
    },
    {
        image: "images/20200820_110753.jpg",
        alt: "kids in hats inspecting jellyfish"
    },
    {
        image: "images/20190630_123915.jpg",
        alt: "Family of 4 hiking selfie"
    },
    {
        image: "images/20210923_150908.jpg",
        alt: "sunflowers on a walk"
    },
    {
        image: "images/20211024_130940.jpg",
        alt: "Bridal Veil Falls in the distance"
    },
    {
        image: "images/34513_1505315110196_6371760_n.jpg",
        alt: "motorcyles on street",
    },
    {
        image: "images/20191027_101513.jpg",
        alt: "flamingo cake"
    },
    {
        image: "images/20200119_112059.jpg",
        alt: "cross country ski family selfie"
    },
    {
        image: "images/20220819_200200.jpg",
        alt: "Sunset at Poulsbo marina"
    },
    {
        image: "images/44691_1564343585871_191915_n.jpg",
        alt: "blue motorcycle",
    },
    {
        image: "images/20220406_142349.jpg",
        alt: "kid in orange vest hiking"
    },
    {
        image: "images/20220412_173630.jpg",
        alt: "sailboat returning to Shilshole"
    },
    {
        image: "images/66126_4574688162604_562896373_n.jpg",
        alt: "giving kids rides on dirtbike",
    },
    {
        image: "images/20200926_164911-EFFECTS.jpg",
        alt: "metal skeleton on shilshole breakwater"
    },
    {
        image: "images/20220424_114557.jpg",
        alt: "peaceful water on Lake Riley"
    },
    {
        image: "images/River.JPG",
        alt: "snowshoe view fluffy snow by river"
    },
    {
        image: "images/20210310_144233.jpg",
        alt: "woodworking name sign"
    },
    {
        image: "images/20210725_181523.jpg",
        alt: "kids swimming in their clothes"
    },
    {
        image: "images/22539024_10214481161120164_7664179509913826787_o.jpg",
        alt: "quilted receiving blankets"
    },
    {
        image: "images/20220821_141403.jpg",
        alt: "peaceful sailing on puget sound"
    },
    {
        image: "images/20220902_130435.jpg",
        alt: "Child kayaking on Pearrygin Lake"
    },
    {
        image: "images/P1000650.JPG",
        alt: "Hiking Section J PCT"
    }
]
const numOfImages = carouselImages.length - 1

// const rootsText = "Born and raised in the PNW, I really identify with the term ROOTS. Growing up with an appreciation for the outdoors and all sorts of outdoors activities made my heart root deep into Western Washington. I grew up riding dirtbikes, hiking & camping. As I grew older my interests expanded into backpacking, other motorcycles, water skiing, downhill or crosscountry skiing, snowshoeing and most recently sailing. Even if my future leads me out of Washington State this is where my roots lie."

const workExperience = {
    soundO2: [
        {
            title: "Patient Care Coordinator",
            summary: "At Sound Oxygen Services I was working in a fast paced environment to obtain, analyze and verify needed information from referrals for patient orders. It was pivotal for the patients health to process their orders quickly and schedule patients to receive the care their physicians prescribed as soon as possible. Orders ranged in complexity; simple nebulizers, CPap or BiPap, oxygen tanks or concentrators as well as other DME equipment. Scheduling, answering & making calls and communication with referrals was of the utmost importance, as well as monitoring inventory so we had stock of what was needed. During patient appointment times it was important to educate the patients on their financial responsibilities as set by their insurance and often on how to meet compliance so their insurance would cover the equipment.   I was also trained to help fit patients with the various types of masks they could use with the Pap machines. Getting comfortable with their CPap and mask was pivotal to the patients success with the equipment.",
        }
    ],
    fircrest: [
        {
            title: "Attendant Counselor 3",
            summary: "Functions as shift charge, training and evaluating staff to work with clients in a safe and effective manner, while acting as liason between upper management, subordinate staff, family members, nursing staff and more. Provide input for staff on daily duty assignments and unit operations for the shift. Create a rotating schedule so everyone is capable of working any post on the unit. Ensure proper procedures and safety is maintained for all clients and staff. Place orders for household needs to be delivered; food, cleaning, laundry and more. Check inventories for clients and ensure their needs are met with the state funds alloted and their own personal funds. Coordinate all holiday plans for clients. Ensure the unit is maintained in an organized, clean and safe way. **Other duties below also apply.**",
        },
        {
            title: "Attendant Counselor 2",
            summary: "Sometimes act as shift lead; assign staff to work with clients on a rotating schedule and make sure all activities for the day were completed. Function as a member of the team and communicate with ACM (Attendant Counselor Manager) and other habilitative support persons in changes in client needs and behaviors. Checked client personal inventories as well as manage household inventories, work orders and other related reports. Help make decisions based on policies, procedures and supervisory instructions. **Other duties below also apply.**",
        },
        {
            title: "Attendant Counselor 1",
            summary: "Provide a safe and supportive environment for clients with developmental disabilites in the home provided by the State. Encourage independent living skills for each client through active treatment as laid out by the house 'team', such as hygeine, grooming, drssing, meal prep, money management and routine household duties. Assist in ADL's (activites of daily living) including physical, emotional, psychological and rehabilitative care. I was licensed to transport clients to and from activities whether it be work, appointments, school or community events. Frequent training in new types of therapeutic options ensured I was able to intervene when clients were assaultive towards themselves or others. There was a wide variety of types of challenging behaviors to face, being prepared for the unexpected was important.  Documentation was vital; any physical, mental or behavioral changes were logged or reported as they occured depending on severity and at least by end of shift. Often times we assisted at neighboring homes on the property when they called for a Behavior Response Team. Staffing was varied per client and shift, some needed 1:1 (staff:client) care or even 2:1 care, while others were 1:4 (staff:client).",
        }
    ],
    billies: [
        {
            title: "Showroom/Warehouse Manager",
            summary: "Responsibilities grew over the years. By 2006 I was managing in-showroom sales & orders, processing all billing as well as coordinating shipping all over the US. We had monthly trade shows to plan for, which involved booth layout for shows, planning merchandise to take and packing/driving up to a 26'ft truck to trade shows in the Northwest. I was responsible to organize duties for employees, keep good customer relations, and make daily sales & tax reports. I worked closely with customers on boosting their sales via selective marketing for their vicinity & target age group. New products arrived daily and required frequent reworking of product displays. ",
        }
    ],
    specialty: [
        {
            title: "Office Assistant & Warehouse Specialist",
            summary: "I started working at Specialty Pump and Well at a very young age, it was my first realy job. At first I started in the warehouse; cleaning, organizing and stocking shelves and trucks with the tools and parts needed to go to jobs. I quickly started helping out in the office, becoming very familiar with Quickbooks for billing and the various scheduling needs for different job types. Scheduling included logically planning the workers time needed to travel to jobs and complete them, and fitting things in as time allowed. This job really taught me a solid work ethic.",
        }
    ]
}

const Projects = {
    project1: [
        {
        name: "Not For Vegans",
        description: "Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank."
        }
    ],
    project2: [{
        name: "Flying Spaghetti Monster",
        description: "Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of thunder. Reef sails six pounders skysail code of conduct sloop cog Yellow Jack gunwalls grog blossom starboard. Swab black jack ahoy Brethren of the Coast schooner poop deck main sheet topmast furl marooned."
    }],
    project3: [{
        name: "Wallace & Gromit",
        description: "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese."
    }],
    project4: [{
        name: "OK For Vegans",
        description: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify."
    }]
}

$(() => {
    //images for carousel loop
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

    //Work Experience Modal Buttons

    $(".modal-buttons.open").on('click', function () {
        console.log($(this).attr("data-modal"))
        const wex = workExperience[$(this).attr("data-modal")]
        console.log(wex)
        $("#modal-textbox").empty()
        for (let i = 0; i < wex.length; i++) {
            const $title = $('<h3>').text(wex[i].title);
            const $summary = $('<p>').text(wex[i].summary);
            $("#modal-textbox").append($title).append($summary);

        }
        $('#modal-overlay').css("display", "block")
    })

    $(".modal-buttons.close").on('click', () => {
        $('#modal-overlay').css("display", "none")
    })

    //Roots (on home page) drop down button
    // $('.roots-dropdown.open').on('click', function () {
    //         $('.roots-text').toggleClass("show");
    //     })

    //Projects 
    $(".project-button.open").on('click', function () {
        console.log($(this).attr("project-data"))
        const project = Projects[$(this).attr("project-data")]
        console.log(project)
        $("#project-textbox").empty()
        for (let i = 0; i < project.length; i++) {
            const $name = $('<h3>').text(project[i].name);
            const $description = $('<p>').text(project[i].description);
            $("#project-textbox").append($name).append($description);

        }
        $('#project-overlay').css("display", "block")
    })

    $(".project-button.close").on('click', () => {
        $('#project-overlay').css("display", "none")
    })

})