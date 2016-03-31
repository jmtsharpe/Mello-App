class Card < ActiveRecord::Base
  validates :subject, :board_id, presence: true

  belongs_to(
  :board,
  class_name: "Board",
  foreign_key: :board_id,
  primary_key: :id
  )
  
end
