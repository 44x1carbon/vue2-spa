import $ from 'jquery'

const url = 'http://connpass.com/api/v1/event/'

export const getEvents = (data) => {
	const defer = $.Deferred()
	$.ajax({
		url,
		type:'GET',
		data,
		dataType: 'jsonp',
		success: defer.resolve,
		error: defer.reject
	})
	return defer.promise()
}
