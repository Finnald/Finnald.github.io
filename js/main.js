var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/finnald/repos', true)

request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data)

    var repoCards = '';

    $.each(data, function(i, status) {
        repoCards += '<div class="max-lg:col-span-3 m-auto  card card-compact lg:w-70 bg-base-100 shadow-xl col-span-1">';
        repoCards += '<div class="card-body lg:h-[250px] max-lg:h-[300px]">';

        repoCards += '<h2 class="card-title">'+status.name+'</h2>';
        repoCards +='<p>'+status.description+'</p>';

        repoCards += '<div class="card-actions justify-end">';
        repoCards += '<p class="my-3">Created: '+status.created_at.substring(0,10)+' </p>';
        repoCards += '<p class="my-3">'+status.language+' </p>';
        repoCards += '<a href="'+status.html_url+'" target="_blank"><button class="btn btn-primary">Take a look</button></a>';
        repoCards += '</div>';
        repoCards += '</div>';
        repoCards += '</div>';

    });

    $('#repoCards').html(repoCards);
}

request.send()