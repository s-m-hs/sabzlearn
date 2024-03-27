import React from 'react'
import './AboutUs.css'
import SectionHeader from './../sectionHeader/SectionHeader'
import AboutUsBox from '../aboutUsBox/AboutUsBox'

export default function AboutUs() {
  return (

    <div class="about-us">
      <div class="container"> 
      <div className="row">
<SectionHeader
title='ما چه کمکی به شما میکنیم '
desc='خرید با صرفه'
/>
<AboutUsBox
title='اجازه تدریس'
desc='به هر مدرسی رو نمیده. چون کیفیت براش مهمه'
/>
<AboutUsBox
title='اجازه تدریس'
desc='به هر مدرسی رو نمیده. چون کیفیت براش مهمه'
/>
<AboutUsBox
title='اجازه تدریس'
desc='به هر مدرسی رو نمیده. چون کیفیت براش مهمه'
/>
<AboutUsBox
title='اجازه تدریس'
desc='به هر مدرسی رو نمیده. چون کیفیت براش مهمه'
/>

</div>
      </div>
      </div>
       )
}
