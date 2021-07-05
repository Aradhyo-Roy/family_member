var i = 0;
function update(){
    var number_of_family_member_in_array  = 5;

    if (i > number_of_family_member_in_array );

    {
        i = 0;
    }
    var updatedImages = images[i];

    var updatedNames=names[i];

    document.getElementById("family_mamber_image").src = updatedImage;

    document.getElementById("family_mambers_name").innerHTML = updatedNames;

    i++;

}
var images = ["https://drive.google.com/file/d/1LNOJQZAcqaiQiQ3PEsMXC5xbW2l90Fd6/view?usp=sharing", "https://drive.google.com/file/d/1dCg1n6_r1UEE90HgxTBGA13cYgB92wmA/view?usp=sharing", "https://drive.google.com/file/d/1nf__dSyvwxPF3NZsXevrBqM3NylZmFPs/view?usp=sharing", "https://drive.google.com/file/d/1hizwwIq6XYUladMCpHnPVwxBz3vu2WXs/view?usp=sharing", "https://drive.google.com/file/d/1sFrSbA3hyuKfqPBBt3Jnmq9Jf4NUzZSW/view?usp=sharing", "https://drive.google.com/file/d/1hizwwIq6XYUladMCpHnPVwxBz3vu2WXs/view?usp=sharing", "https://drive.google.com/file/d/14Oryn-SzjL9es8dnrYw20JsEhDyNpQx4/view?usp=sharing"];

var names = ["Debashis roy", "Ram krishna mazumdar", "Annapurna Mazumdar", "Sangeeta mazumdar", "Soumit mazumdar", "Soumita mazumdar"];