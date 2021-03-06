AFRAME.registerComponent('accepts-clicks', {
  init: function() {
    this.el.addEventListener('touchend', handleClickEvent);
    this.el.addEventListener('click', handleClickEvent);
  },
  tick: function() {
    hideConvoBubbleIfNoMarker();
  }
});

function hideConvoBubbleIfNoMarker() {
  var convoBubble = document.querySelector(".convo-bubble");
  if (convoBubble.style.display === 'none' || !convoBubble.style.display) return;

  var shouldHide = true;
  characters.forEach(function(character){
    var characterMarker = document.querySelector("#" + character.name + "-marker");
    if (characterMarker && characterMarker.object3D.visible) shouldHide = false;
  });

  if (shouldHide) convoBubble.style.display = 'none';
};

function handleClickEvent() {
  characters.forEach(function(character) {
    var characterMarker = document.querySelector("#" + character.name + "-marker");
    if (characterMarker && characterMarker.object3D.visible) {
      toggleConvoBubble(character.dialogue);
    }
  });

}

function toggleConvoBubble(dialogue) {
  var convoBubble = document.querySelector(".convo-bubble");
  if (convoBubble.style.display === 'none' || !convoBubble.style.display) {
    convoBubble.innerHTML = dialogue;
    convoBubble.style.display = 'block';
  } else {
    convoBubble.style.display = 'none';
  }
};

