    jQuery(document).ready(function(e){

        jQuery('.twitter-share-count,.facebook-share-count,.js-btn-countshare').each(function(){
            var el = jQuery(this);
            el.on({
                'click':function(){
                    if(typeof el.attr('data-id') != 'undefined'){
                        window.open(urlcountshare+'?postid='+el.attr('data-id')+'&action=countshare&redirect='+el.attr('href'), "", "width=500, height=300");
                        return false;
                    }
                }
            });
        });
    });

    jQuery(window ).load(function(e){
        if(typeof post_id_count_share !== 'undefined'){
            jQuery.ajax({
                dataType: "json",
                url: urlcountshare+'?postid='+post_id_count_share+'&action=reloadshares',
                success: function(json){
                    jQuery.each(json, function(val,key){
                        jQuery('.number-count-share-'+key).html(val);
                    });
                }
            });
        }
    });