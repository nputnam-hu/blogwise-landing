/* eslint-disable */
// const updateIntercom = () => {
//   window.Intercom('update')
// }

// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log('new pathname', location.pathname)
//   console.log('old pathname', prevLocation ? prevLocation.pathname : null)

//   // Track pageview with google analytics
//   updateIntercom()
// }

exports.onInitialClientRender = () => {
  _linkedin_partner_id = '1064858'
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []
  window._linkedin_data_partner_ids.push(_linkedin_partner_id)(function() {
    var s = document.getElementsByTagName('script')[0]
    var b = document.createElement('script')
    b.type = 'text/javascript'
    b.async = true
    b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
    s.parentNode.insertBefore(b, s)
  })()

  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', 'UA-135783812-1')
}
