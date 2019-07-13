class MensageView extends View{
    _template(model){
        return model.text ? `<p class="alert alert-info">${model.text}</p>` : '<p></p>';
 
    }
}