class RenameColumnToPokemonType < ActiveRecord::Migration[6.1]
  def change
    rename_column :cards, :type, :pokemon_type
  end
end
