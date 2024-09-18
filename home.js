document.addEventListener('DOMContentLoaded', function() {
    // التعامل مع إرسال الفورم
    const quoteForm = document.getElementById('quote-form');
    const responseMessage = document.getElementById('response-message');

    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault(); // منع الإرسال الافتراضي للفورم

            // التحقق من صحة الفورم
            if (quoteForm.checkValidity()) {
                // الفورم صالح، عرض رسالة النجاح
                responseMessage.style.display = 'block';
                
                // اختيارياً، مسح الفورم
                quoteForm.reset();

                // اختيارياً، إخفاء الرسالة بعد بعض الوقت
                setTimeout(() => {
                    responseMessage.style.display = 'none';
                }, 5000); // إخفاء الرسالة بعد 5 ثواني
            } else {
                // الفورم غير صالح، عرض أخطاء التحقق
                responseMessage.style.display = 'none';
                quoteForm.reportValidity(); // تفعيل رسائل التحقق المدمجة في المتصفح
            }
        });
    }

    // التعامل مع اختيار نوع الأرضيات وتعبئة الفئات الفرعية
    const floorTypeSelect = document.getElementById('floor-type');
    const subCategorySelect = document.getElementById('sub-category');

    const subCategories = {
        'courts': [
            'Football', 'Basketball', 'Hockey', 'Padbol', 'Volleyball', 
            'Playgrounds', 'Handball', 'Tracks', 'Tennis', 'Squash', 
            'MultiPurpose', 'Padel'
        ],
        'pools': [
            'Swimming Pools'
        ],
        'landscape': [
            'Climbing walls'
        ],
        'maintenance': [
            'Maintenance'
        ]
    };

    if (floorTypeSelect && subCategorySelect) {
        floorTypeSelect.addEventListener('change', function () {
            const selectedType = floorTypeSelect.value;
            const options = subCategories[selectedType] || [];

            // مسح الخيارات الحالية
            subCategorySelect.innerHTML = '<option value="">Select Sub Category</option>';

            // إضافة الخيارات الجديدة
            options.forEach(function (option) {
                const optionElement = document.createElement('option');
                optionElement.value = option.toLowerCase().replace(/\s+/g, '-');
                optionElement.textContent = option;
                subCategorySelect.appendChild(optionElement);
            });
        });
    }

    document.querySelectorAll('.courts-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const menu = this.nextElementSibling;
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                document.querySelectorAll('.courts-menu').forEach(m => m.style.display = 'none');
                menu.style.display = 'block';
            }
        });
    });
    
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('courts-link')) {
            document.querySelectorAll('.courts-menu').forEach(menu => menu.style.display = 'none');
        }
    });
});



